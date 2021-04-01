<template lang="html">
  <div>
    <transition name="fade">
      <sui-message
        info
        v-if="visible"
        :class="text.success ? 'green' : 'red'"
        :header="text.success ? 'Sucesso' : 'Erro'"
        :content="text.success ? text.success : text.error"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: "Message",
  data: () => ({
    visible: false,
  }),
  props: {
    text: Object,
  },
  watch: {
    text() {
      this.visible = true;
    },
    visible() {
      if (this.visible) {
        setTimeout(() => {
          this.visible = !this.visible;
        }, 2000);
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>