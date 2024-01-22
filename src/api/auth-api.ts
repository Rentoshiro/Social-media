import { instance, ResponseType, ResultCodeEnum } from "../api/api.ts";

type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};

type LoginMeResponeDataType = {
  userId: number;
};

export const authAPI = {
  me() {
    return instance.get<ResponseType<MeResponseDataType>>(`auth/me`);
  },
  login(
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null | string = null
  ) {
    return instance.post<ResponseType<LoginMeResponeDataType>>(`auth/login`, {
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
