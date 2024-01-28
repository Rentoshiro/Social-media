import { instance, ResponseType } from "./api";

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe, captcha = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
