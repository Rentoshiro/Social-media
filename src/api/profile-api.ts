import { instance, ResponseType } from "../api/api.ts";
import { profileType, photoType } from "../types/types.ts";

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<profileType>(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put<ResponseType>(`profile/status`, { status: status });
  },
  updatePhoto(photo: any) {
    return instance.put<ResponseType<photoType>>(`profile/photo`, photo);
  },
  saveProfile(profile: profileType) {
    return instance.put<ResponseType>(`profile`, profile);
  },
};
