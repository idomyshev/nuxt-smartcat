<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <br />
    This is home page
    <br /><br />
    <NuxtLink :to="{ name: 'users' }">Users page</NuxtLink>
    <br /><br />
    <NuxtLink :to="{ name: 'shallowTriggerRef' }">
      shallowRef/triggerRef
    </NuxtLink>
  </div>
</template>
