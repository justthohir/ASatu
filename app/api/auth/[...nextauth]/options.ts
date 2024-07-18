import bcrypt from "bcrypt"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import prisma from "@utils/database"

export const options: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "email",
					type: "text",
					placeholder: "your-email",
				},
				password: {
					label: "password",
					type: "password",
					placeholder: "your-password",
				},
			},
			async authorize(credentials) {
				try {
					if (!credentials?.email || !credentials?.password) {
						throw new Error("Invalid Credentials")
					}
					const user = await prisma.user.findUnique({
						where: {
							email: credentials.email,
						},
					})
					if (!user || !user?.hashedPassword) {
						throw new Error("Invalid Credentials")
					}
					const isCorrectPassword = await bcrypt.compare(
						credentials.password,
						user.hashedPassword,
					)
					if (!isCorrectPassword) {
						throw new Error("Invalid Credentials")
					}
					if (user.userStatus == 0) {
						throw new Error("user is suspended")
					}
				} catch (error) {
					console.log(error)
				}
				return null
			},
		}),
	],
	debug: process.env.NODE_ENV == "development",
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET as string,
}
