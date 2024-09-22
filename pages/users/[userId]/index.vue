<template>
  <div>
    <br />
    <NuxtLink :to="{ name: 'users' }">Users page</NuxtLink>
  </div>
  <h1>User page</h1>
  <UserCard v-if="user" :model-value="user" />
</template>

<script lang="ts" setup>
import type { User } from "~/mockData/user";
import { useUsersStore } from "~/store/usersStore";
import UserCard from "~/components/UserCard.vue";

const route = useRoute();

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

const user = computed<User | null>(() => {
  return users.value.find((item) => item.id == route.params.userId) ?? null;
});
</script>

<style lang="scss" scoped></style>
