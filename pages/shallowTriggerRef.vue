<template>
  <div>
    <div>
      <br />
      <NuxtLink :to="{ name: 'index' }">Home page</NuxtLink>
    </div>
    <h1>shallowRef/triggerRef</h1>
    <div>
      items: {{ items }} <br /><br />
      <button @click="addToArray">Add to ref array</button>
    </div>
    <div>
      <br />
      itemsShallow: {{ itemsShallow }} <br /><br />
      <button @click="addToArrayShallow">Add to shallowRef array</button>
      <br /><br />
      <button @click="replaceShallowArray">Replace shallowRef array</button>
      <br /><br />
      <button @click="runTriggerRefItems">run triggerRef</button>
    </div>

    <div>
      <br />
      object: {{ object }} <br /><br />
      <button @click="updateAge">Update age on ref</button>
    </div>
    <div>
      <br />
      objectShallow: {{ objectShallow }} <br /><br />
      <button @click="updateAgeShallow">Update age on shallowRef</button>
      <br /><br />
      <button @click="replaceShallowObject">Replace shallowRef object</button>
      <br /><br />
      <button @click="runTriggerRefObject">run triggerRef</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { random } from "lodash";
const items = ref([1, 2, 3]);
const itemsShallow = shallowRef([1, 2, 3]);
const object = ref({ name: "Alice", age: 30 });
const objectShallow = shallowRef({ name: "Alice", age: 30 });

const addToArray = () => {
  items.value.push(random(1, 100));
};

const addToArrayShallow = () => {
  itemsShallow.value.push(random(1, 100));
};

const replaceShallowArray = () => {
  itemsShallow.value = [5, 6, 7, 8];
};

const runTriggerRefItems = () => {
  triggerRef(itemsShallow);
};

const updateAge = () => {
  object.value.age++;
};

const updateAgeShallow = () => {
  objectShallow.value.age++;
};

const replaceShallowObject = () => {
  objectShallow.value = { name: "Bob", age: 40 };
};

const runTriggerRefObject = () => {
  triggerRef(objectShallow);
};

// const user = ref({
//   name: "Alice",
//   age: 30,
// });

// const handleClick = () => {
//   Object.defineProperty(user.value, "surname", {
//     name: "Bob",
//     age: 40,
//   });
//   //user.value.age++;
//   //Object.assign(user.value.age, 50);
//   //triggerRef(user);
// };
</script>

<style lang="scss" scoped></style>
