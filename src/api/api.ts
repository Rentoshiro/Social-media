import axios from "axios";
import { userType } from "../types/types";

export const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "9ee57515-f0b6-4693-8ed6-c2e5928d4453",
  },
});

export enum ResultCodeEnum {
  Succes = 0,
  Error = 1,
  CaptchaIsRequired = 10,
}

export type GetItemsType = {
  items: Array<userType>;
  totalCount: number;
  error: string | null;
};

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};
