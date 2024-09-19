<template>
  <NuxtErrorBoundary @error="someErrorLogger">
    <div>Post {{ route.params.id }}</div>
  </NuxtErrorBoundary>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data } = await useFetch(`/api/movies/${route.params.slug}`);
throw new Error("custom");

// if (!data.value) {
//   throw createError({
//     statusCode: 404,
//     statusMessage: 'Page Not Found',
//     fatal: true
//   })
// }

const someErrorLogger = () => {
  console.log("Bad 123");
};
</script>

<style></style>
