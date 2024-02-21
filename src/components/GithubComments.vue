<script lang="ts" setup>
import { inject, onMounted } from "vue";
import * as Keys from "../providers/keys";

const CONFIG = {
    ENDPOINT: `http://localhost:3000`,
    STORAGE_KEY: `github-comment-jwt`,
};

const { setup, logout, isLoggedIn } = inject<Keys.IGithubOAuth>(Keys.GithubOAuth) as Keys.IGithubOAuth;
const username = inject<string>(Keys.GithubUsername);
const avatar = inject<string>(Keys.GithubAvatar);

function storePath() {
    localStorage.setItem("previous-link", `${window.location.origin}${window.location.pathname}`);
}

onMounted(() => {
    setup();
});
</script>

<template>
    <div>
        <a v-if="!isLoggedIn()" :href="CONFIG.ENDPOINT + '/api/login'" @click="storePath">Login</a>
        <a v-else @click="logout"><img :src="avatar" width="32" height="32" /> Logout {{ username }}</a>
    </div>
</template>
