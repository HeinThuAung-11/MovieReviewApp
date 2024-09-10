import { moviesApi } from "../movies/moviesApi";

export interface loginProps {
  userName: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export const authApi = moviesApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, loginProps>({
      query: (authRequest: loginProps) => ({
        url: "/users/login",
        method: "POST",
        body: authRequest,
      }),
      invalidatesTags: ["Movie"],
    }),
  }),
});

export const { useLoginMutation } = authApi;
