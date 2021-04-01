<template lang="html">
  <div>
    <sui-modal v-model="open" class="fullscreen modal-img">
      <sui-modal-header>{{gif.title}}</sui-modal-header>
      <sui-modal-content image>
        <img
        :src="gif.link"
        :key="gif.id"
      />
        <div>
          <sui-modal-description class="description">
            <sui-header>Informações</sui-header>
            <p>
              <strong>Id: </strong><span>{{gif.id}}</span>
            </p>
            <p>
              <strong>Embed URL: </strong><span>{{gif.embed_url || "Não informado"}}</span>
            </p>
            <p>
              <strong>Data de Upload: </strong><span>{{formatDate(gif.import_datetime)}}</span>
            </p>
            <p>
              <strong>Rating: </strong><span>{{gif.rating || "Não informado"}}</span>
            </p>
          </sui-modal-description>
        </div>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button color="yellow" @click.native="$emit('close-modal')">
          <i class="close icon"></i> Fechar
        </sui-button>
        <sui-button negative @click.native="$emit('remove-gif')">
          <i class="heart outline icon"></i> Retirar
        </sui-button>
        <sui-button primary @click.native="$emit('edit-gif')">
          <i class="heart pencil icon"></i> Editar
        </sui-button>
        <sui-button positive @click.native="$emit('save-gif')">
          <i class="heart icon"></i> Salvar
        </sui-button>
        <Message :text="text" class="margin-10" />
      </sui-modal-actions>
      
    </sui-modal>
  </div>
</template>

<script>
import Message from "./message";
export default {
  name: "GifModal",
  components: { Message },
  props: {
    open: Boolean,
    gif: Object,
    text: Object,
  },
  methods: {
    formatDate(date) {
      if (date) {
        let formatedDate = date.split(" ")[0];
        return formatedDate.split("-").reverse().join("/");
      }
    },
  },
  watch: {
    open() {
      if (!this.open) this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap");
.modal-img {
  font-family: "Roboto", sans-serif;
}
.margin-10 {
  margin: 10px;
}
.description {
  padding: 10px;
}
.fullscreen {
  width: "100%";
}
</style>