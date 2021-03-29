<template>
  <sui-container>
    <sui-divider hidden />
    <sui-header as="h1" floated="left">
      <sui-icon name="arrow left" />
      Click Fork to get started!!!!!!!!!!1 {{ a }}
    </sui-header>

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
export default {
  data: () => ({
    a: "abcdefghijklm",
  }),
};
</script>