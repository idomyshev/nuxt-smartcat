<script setup lang="ts">
const route = useRoute();
const incrementValue = useState("incrementValue", () => 0);
const email = ref();

const increaseValue = () => {
  incrementValue.value++;
};

const { data, status, error, refresh, clear } = await useFetch(
  "https://jsonplaceholder.typicode.com/users/10",
  {
    pick: ["email"],
  }
);

if (data.value) {
  email.value = data.value.email;
}

console.log("FETCH DATA:", data.value);
console.log("FETCH STATUS:", status.value);
console.log("FETCH ERROR CODE:", error.value?.statusCode);
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
    <div>
      <br />
      incrementValue: <br />
      {{ incrementValue }} <button @click="increaseValue">Increase</button>
    </div>
    <div>Email: {{ email }}</div>
  </div>
</template>
