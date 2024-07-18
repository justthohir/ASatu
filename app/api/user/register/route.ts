import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server"
import { register } from "@models/user"

type RegisterData = {
	email: string
	username: string
	name: string
	password: string
}

export const POST = async (req: NextRequest) => {
	try {
		const { email, username, name, password }: RegisterData = await req.json()
		const hashedPassword = await bcrypt.hash(password, 12)
		const user = await register({
			email,
			username,
			name,
			hashedPassword,
		})
		return NextResponse.json(user, { status: 200 })
	} catch (error) {
		return new Response("Failed to register", { status: 500 })
	}
}
