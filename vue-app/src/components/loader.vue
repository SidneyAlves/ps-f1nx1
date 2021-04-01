<template>
  <div class="ui active dimmer loading" v-if="loading">
    <div class="ui loader"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  data: () => ({}),
  props: {
    loading: Boolean,
  },
};
</script>

<style scoped>
.loading {
  z-index: 100000;
}
</style>
