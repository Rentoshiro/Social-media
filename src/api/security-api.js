import { instance } from "./api";

export const securityAPI = {
  security() {
    return instance.get(`/security/get-captcha-url`);
  },
};
