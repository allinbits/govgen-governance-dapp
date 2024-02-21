<script lang="ts" setup>
import { provide, readonly, ref } from "vue";
import * as Keys from "./keys";
import { UserResponse } from "../types/comments";

const CONFIG = {
  ENDPOINT: `http://localhost:3000`,
  STORAGE_KEY: `github-comment-jwt`,
};

let username = ref<string>();
let avatar = ref<string>();

/**
 * Propogate the username, and verify the token is valid.
 */
async function updateUser() {
  // Check if token already exists
  const jwtToken = localStorage.getItem(CONFIG.STORAGE_KEY);
  if (!jwtToken) {
    return;
  }

  // Verify token
  const res = await fetch(CONFIG.ENDPOINT + `/api/user`, { headers: { Authorization: jwtToken }, method: "GET" }).catch(
    (err) => {
      console.error(err);
      return undefined;
    },
  );

  if (!res || !res.ok || res.status !== 200) {
    localStorage.removeItem(CONFIG.STORAGE_KEY);
    return;
  }

  const data: UserResponse = await res.json();
  username.value = data.login;
  avatar.value = data.avatar_url;
}

function isLoggedIn(): boolean {
  return typeof username.value === "string";
}

/**
 * If a temporary token is passed via the URL Search Params we do the following
 * 1. Exchange the temporary token for a jwt token
 * 2. Store the JWT in local storage
 *
 * Note: Temporary token is wiped from the server on 1st fetch
 *
 * If there is not a token passed, we check local storage, and verify
 */
async function setup(): Promise<void> {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  // Check the URL Params for `token` and exchange temporary token for JWT for storage
  if (token) {
    const res = await fetch(CONFIG.ENDPOINT + `/api/token`, { headers: { Authorization: token }, method: "GET" }).catch(
      (err) => {
        console.error(err);
        return undefined;
      },
    );

    if (!res || !res.ok || res.status !== 200) {
      return;
    }

    const jwt = await res.text();
    localStorage.setItem(CONFIG.STORAGE_KEY, jwt);

    // Rewrite URL in bar, and remove temporary token
    urlParams.delete("token");
    if (urlParams.size >= 2) {
      window.history.replaceState(
        {},
        "",
        `${window.location.origin}${window.location.pathname}?${urlParams.toString()}${window.location.hash}`,
      );
    } else {
      window.history.replaceState(
        {},
        "",
        `${window.location.origin}${window.location.pathname}${window.location.hash}`,
      );
    }

    updateUser();
    return;
  }

  updateUser();
  return;
}

function logout() {
  localStorage.removeItem("previous-link");
  localStorage.removeItem(CONFIG.STORAGE_KEY);
  username.value = undefined;
  avatar.value = undefined;
}

provide(Keys.GithubOAuth, { logout, setup, isLoggedIn });
provide(Keys.GithubUsername, readonly(username));
provide(Keys.GithubAvatar, readonly(avatar));
</script>

<template>
  <slot></slot>
</template>
