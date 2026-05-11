import api from "./api";

export const loginUser = async (
  username: string,
  password: string
) => {
  const response = await api.post(
    "/auth/login/",
    {
      username,
      password,
    }
  );

  return response.data;
};

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const response = await api.post(
    "/auth/register/",
    {
      username,
      email,
      password,
    }
  );

  return response.data;
};