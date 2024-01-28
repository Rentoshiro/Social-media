import { instance } from "./api";

export const usersAPI = {
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getUsers(currentPage, pageSize, userName, friends) {
    return instance.get(
      `users?page=${currentPage}&count=${pageSize}
        &term=${userName}&friend=${friends}
        `
    );
  },
};
