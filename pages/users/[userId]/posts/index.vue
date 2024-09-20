<template>
  <h1>Posts page</h1>
  <div>
    <div>User Id: {{ route.params.userId }}</div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
</script>

<style lang="scss" scoped></style>
