import { GetItemsType, instance, ResponseType } from "../api/api.ts";

export const usersAPI = {
  follow(userId: number) {
    return instance.post<ResponseType>(`follow/${userId}`);
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`);
  },
  getUsers(currentPage: number, pageSize: number, userName: string) {
    return instance.get<GetItemsType>(
      `users?page=${currentPage}&count=${pageSize}
        &term=${userName}
        `
    );
  },
};
