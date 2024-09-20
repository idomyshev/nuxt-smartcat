<template>
  <div style="width: 100%">
    <div>This is App.vue piece</div>
    <NuxtRouteAnnouncer />
  </div>
  <div><br />NuxtPage::Starts</div>
  <div style="width: 100%">
    <NuxtPage />
  </div>
  <div><br />NuxtPage::Ends</div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
table {
  border-collapse: collapse;
}
table td, table th {
  border: 1px solid black;
}
table tr:first-child th {
  border-top: 0;
}
table tr:last-child td {
  border-bottom: 0;
}
table tr td:first-child,
table tr th:first-child {
  border-left: 0;
}
table tr td:last-child,
table tr th:last-child {
  border-right: 0;
}
</style>