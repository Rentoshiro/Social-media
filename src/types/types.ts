export type postType = {
  id: number;
  message: string;
  likesCount: number;
};

export type profileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: contactsType;
  photos: photoType;
  aboutMe: string;
};

export type contactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type photoType = {
  small: string | null;
  large: string | null;
};

export type userType = {
  id: number;
  name: string;
  status: string;
  photos: photoType;
  followed: boolean;
};
