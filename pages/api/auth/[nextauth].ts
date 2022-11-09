import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { api } from "../../../src/manager/utils/axios";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "johndoe" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const user = await api.get(`/user?id=${credentials.username}`);
          if (user) {
            const userAccount = user.data;
            return userAccount;
          } else {
            return null;
          }
        } catch (error) {
          const message = error.response.data.message;
          throw new Error(message);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        console.log(token);
        // session.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.SECRET,
  pages: {
    signIn: "/login",
    error: "/login",
  },
  jwt: {
    secret: process.env.SECRET,
  },
});