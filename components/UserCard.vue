<template>
  <div class="user-card">
    <div>
      id:
      <NuxtLink
        :to="{ name: 'users-userId', params: { userId: modelValue.id } }"
      >
        {{ modelValue.id }}
      </NuxtLink>
    </div>
    <div>username: {{ modelValue.username }}</div>
    <div>email: {{ modelValue.email }}</div>
    <div>birthdate: {{ prepareDate(modelValue.birthdate) }}</div>
    <div>
      registeredAt:
      {{ prepareDate(modelValue.registeredAt) }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { prepareDate } from "~/helpers/dates";

defineModel({
  type: Object,
  required: true,
});
</script>

<style lang="scss" scoped>
.user-card {
  border: 1px solid #666;
  padding: 10px;
  width: 400px;
  overflow: hidden;
}
</style>
