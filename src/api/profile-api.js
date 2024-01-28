import { instance } from "./api.js";

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  updatePhoto(photo) {
    return instance.put(`profile/photo`, photo);
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};
