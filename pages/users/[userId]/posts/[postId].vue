<template>
  <h1>Post page</h1>
  <div>Post Id: {{ route.params.postId }}</div>
  <div>User Id: {{ route.params.userId }}</div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style lang="scss" scoped></style>
