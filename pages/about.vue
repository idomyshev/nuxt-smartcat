<template>
   some content 
  <NuxtErrorBoundary>
    <!-- You use the default slot to render your content -->
    <template #error="{ error, clearError }">
      You can display the error locally here: {{ error }}
      <button @click="clearError">
        This will clear the error.    
      </button>
    </template>
  </NuxtErrorBoundary>
</template>
<script lang="ts" setup>
await useFetch(`/api/movies/123`)   
</script>