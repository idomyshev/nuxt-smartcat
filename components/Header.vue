<template>
  <div>Header component</div>
  <div>
    {{ triggerError() }}
  </div>
</template>

<script lang="ts" setup>
const triggerError = () => {
  throw new Error("This is a render cycle error!");
};
</script>
