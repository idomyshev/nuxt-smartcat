import { faker } from "@faker-js/faker";
import {mockUser, User} from "~/mockData/user";

export const useUsersStore = defineStore("usersStore", () => {
  const users = ref<User[]>(
    faker.helpers.multiple(mockUser, {
      count: 5,
    })
  );

  return { users };
});
