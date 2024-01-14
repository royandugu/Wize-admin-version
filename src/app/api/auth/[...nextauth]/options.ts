import { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const nextAuthSecret=process.env.NEXTAUTH_SECRET;

if (!clientId || !clientSecret || !nextAuthSecret) {
  throw new Error("CLIENT_ID or CLIENT_SECRET or NEXT AUTH SECRET must be defined in the environment");
}
export const options: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: clientId,
        clientSecret: clientSecret
      }),
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "email", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const userValidation={email:"hello@gmail.com", password:"1234",role:"user"}
          const adminValidation={email:"admin@admin.com", password:"12345", role:"admin"}
          if(credentials?.email === userValidation.email && credentials?.password === userValidation.password){
            return JSON.parse(JSON.stringify(userValidation));
          }
          if(adminValidation.email === credentials?.email && adminValidation.password == credentials?.password){
            return JSON.parse(JSON.stringify(adminValidation));
          }
          return null
        }
      })
      
    ],
    secret:nextAuthSecret,
    callbacks:{
      async jwt({token,user}){
        if(user) token.role=user.role;
        return token;
      },
      async session({session, token}){
        if(session?.user) session.user.role=token.role
        return session;
      }
    }
  };