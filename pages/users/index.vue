<template>
  <div>
    <br />
    <NuxtLink :to="{ name: 'index' }">Home page</NuxtLink>
  </div>
  <h1>Users page</h1>
  <div class="user-cards">
    <template v-for="user in users" :key="user.id">
      <UserCard :model-value="user" />
    </template>
  </div>
</template>
<script lang="ts" setup>
import { useUsersStore } from "~/store/usersStore";
import UserCard from "~/components/UserCard.vue";

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);
</script>

<style lang="scss" scoped>
.user-cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
