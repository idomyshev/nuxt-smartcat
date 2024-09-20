<template>
  <NuxtErrorBoundary>
    <Header />
    <template #error="{ error }">
      <div>You can display the error locally here: {{ error }}</div>
    </template>
  </NuxtErrorBoundary>
</template>
<script lang="ts" setup>
// const d = a / 2;
// console.log(d);
</script>
