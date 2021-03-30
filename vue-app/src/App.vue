<template>
  <sui-container>
    <sui-divider hidden />
    <sui-header as="h1" floated="left"> Click Fork to get started </sui-header>
    <input v-model="searchTerm" type="text" />
    <button class="button" @click="getGifs()">Search</button>
    <div
      v-if="gifs.length"
      class="gif-container"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="loading"
    >
      <img v-for="gif in gifs" :src="gif.link" :key="gif.id" />
    </div>
    <sui-divider hidden clearing />
    <a
      target="_blank"
      href="https://github.com/Semantic-UI-Vue/Semantic-UI-Vue"
    >
      <sui-button content="GitHub" icon="github" />
    </a>
    <a target="_blank" href="https://semantic-ui-vue.github.io">
      <sui-button
        color="blue"
        content="Documentation"
        icon="book"
        target="_blank"
      />
    </a>
    <sui-divider hidden clearing />
    <sui-message info>
      After forking, update this template to demonstrate the bug.
    </sui-message>
  </sui-container>
</template>

<script>
import { getTrending, getSearch } from "./services/index";
export default {
  data: () => ({
    a: "abcdefghijklm",
    searchTerm: "",
    gifs: [],
    loading: false,
    offset: 0,
  }),
  async created() {
    this.gifs = await getTrending();
  },
  methods: {
    loadMore: async function () {
      this.loading = true;
      this.offset += 10;
      console.log("carregando", this.offset);
      this.gifs = await getSearch(this.searchTerm, this.offset);
      this.loading = false;
    },
    async getGifs() {
      this.gifs = await getSearch(this.searchTerm);
      console.log(this.gifs);
    },
  },
};
</script>