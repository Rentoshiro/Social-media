import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "9ee57515-f0b6-4693-8ed6-c2e5928d4453",
  },
});
