import { getPostByUser } from "@models/post"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (
	request: NextRequest,
	{ params }: { params: { userId: string } },
) => {
	try {
		const userId = Number(params.userId)
		const user = await getPostByUser(userId)
		return NextResponse.json(user, { status: 200 })
	} catch (error) {
		return new Response("Failed to fetch post", { status: 500 })
	}
}
