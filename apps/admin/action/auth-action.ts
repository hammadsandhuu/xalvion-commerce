"use server";
import { registerUser } from "@/config/user.config";

import { type User } from "@/api/user/data";
export const addUser = async (data: User) => {
  const response = await registerUser(data);
  return response;
};
