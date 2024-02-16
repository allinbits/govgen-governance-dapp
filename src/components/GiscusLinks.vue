<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { GiscusParams } from "../config/giscus";
import type { DiscussionResponse } from "../types/giscus";

type LinkRef = { title: string; url: string };

const props = defineProps<{ path: string }>();
const endpoint = `${GiscusParams.host}/api/discussions`;

let isLoading = ref<boolean>(true);
let links = ref<LinkRef[]>([]);

function extractHttpsLinks(htmlContent: string): string[] {
  const regex = /https:\/\/[\w\-+&@#/%?=~|$!:,.;]+[\w\-+%&@#/=~|$]/g;
  const matches = htmlContent.match(regex) as string[];
  return matches ? matches : [];
}

async function extractLinkTitle(linkUrl: string): Promise<string | undefined> {
  const res = await fetch(`https://corsproxy.io/?${linkUrl}`).catch(() => {
    console.warn(`Could not extract title from: ${linkUrl}`);
    return undefined;
  });

  if (!res || !res.ok) {
    return undefined;
  }

  const html = await res.text();
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  return titleMatch && titleMatch.length > 1 ? titleMatch[1] : undefined;
}

async function propagateDiscussionLinks() {
  const searchParams = new URLSearchParams({ repo: GiscusParams.repo, term: props.path });
  const res = await fetch(endpoint + "?" + searchParams.toString()).catch((err) => {
    isLoading.value = false;
    throw new Error(err);
  });

  if (!res || !res.ok) {
    isLoading.value = false;
    console.error(new Error(`Could not fetch discussion for ${props.path}`));
    return;
  }

  const data = (await res.json()) as DiscussionResponse;
  const allLinks: Set<string> = new Set<string>();

  for (let comment of data.discussion.comments) {
    for (let link of extractHttpsLinks(comment.bodyHTML)) {
      allLinks.add(link);
    }
  }

  const validLinks: LinkRef[] = [];
  for (let link of allLinks) {
    const title = await extractLinkTitle(link);
    if (!title) {
      continue;
    }

    validLinks.push({ title, url: link });
  }

  links.value = validLinks;
  isLoading.value = false;
}

onMounted(propagateDiscussionLinks);
</script>

<template>
  <div v-if="links">
    <div v-for="(link, index) in links" :key="index">
      <a :href="link.url" target="_blank">{{ link.title }}</a>
    </div>
  </div>
</template>
