import { instance } from "../api/api.ts";

export const securityAPI = {
  security() {
    return instance.get(`/security/get-captcha-url`);
  },
};
