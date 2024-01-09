import bcrypt from "bcryptjs"

import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"

import { LoginSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"


export default {
  providers: [

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),

    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    }),

    Credentials({
      async authorize(credentials) {
        
        const validatedFields = LoginSchema.safeParse(credentials)

        if (validatedFields.success) {

          const { email, password } = validatedFields.data
          const user = await getUserByEmail(email)
          if (!user || !user.password) return null
          const passwordMatch = await bcrypt.compare(password, user.password)
          if (passwordMatch) return user
        }

        return null
        
      }
    }),

    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),

    
  ],
} satisfies NextAuthConfig