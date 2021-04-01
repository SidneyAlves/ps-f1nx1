<template>
  <sui-container class="app">
    <div class="ui input input-margin">
      <input v-model="search" type="text" v-on:keyup.enter="getGifs()" />
    </div>
    <button class="button ui primary" @click="getGifs()">Buscar</button>
    <div class="gif-container container-img">
      <img
        v-for="gif in gifs"
        :src="gif.link"
        :key="gif.id"
        @click="openGifModal(gif)"
        class="img"
      />
    </div>
    <GifModal
      :open="modal"
      :gif="selectedGif"
      :text="returnText"
      @close-modal="closeModal"
      @remove-gif="removeGif"
      @edit-gif="editGif"
      @save-gif="saveGif"
    />
    <Loader :loading="loading" />
  </sui-container>
</template>

<script>
import {
  getTrending,
  getSearch,
  saveGif,
  removeGif,
  editGif,
} from "./services/index";
import GifModal from "./components/gif-modal";
import Loader from "./components/loader";
export default {
  components: { GifModal, Loader },
  data: () => ({
    search: "",
    gifs: [],
    selectedGif: {},
    loading: false,
    isSearch: false,
    offset: 0,
    modal: false,
    returnText: {},
  }),
  async created() {
    this.loading = true;
    this.gifs = await getTrending();
    this.loading = false;
  },
  mounted() {
    window.onscroll = async () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.scrollHeight;
      if (bottomOfWindow && !this.loading) {
        this.loading = true;
        this.offset += 10;
        let newGifs = [];
        if (this.isSearch) newGifs = await getSearch(this.search, this.offset);
        else newGifs = await getTrending(this.offset);
        newGifs.forEach((newGif) => this.gifs.push(newGif));
        this.loading = false;
      }
    };
  },
  methods: {
    async getGifs() {
      this.offset = 0;
      this.isSearch = true;
      this.gifs = await getSearch(this.search);
      if (!this.gifs.length) alert("Não foram encontrados gifs na busca");
    },
    openGifModal(gif) {
      this.selectedGif = gif;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    async saveGif() {
      this.loading = true;
      this.returnText = await saveGif(this.selectedGif);
      this.loading = false;
    },
    async editGif() {
      this.loading = true;
      this.returnText = await editGif(this.selectedGif);
      this.loading = false;
    },
    async removeGif() {
      this.loading = true;
      this.returnText = await removeGif(this.selectedGif);
      this.loading = false;
    },
  },
};
</script>
<style scoped>
.app {
  background-color: #051c2c;
  width: 100% !important;
  padding: 10px;
  min-height: 100%;
}
.input-margin {
  margin-right: 10px;
}
.container-img {
  margin: 10px;
}
.img {
  width: 33%;
}
@media screen and (max-width: 768px) {
  .img {
    width: 100%;
  }
}
</style>