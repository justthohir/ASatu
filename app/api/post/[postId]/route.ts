import { getPostById } from "@models/post"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (
	request: NextRequest,
	{ params }: { params: { postId: string } },
) => {
	try {
		const postId = Number(params.postId)
		const post = await getPostById(postId)
		return NextResponse.json(post, { status: 200 })
	} catch (error) {
		return new Response("Failed to fetch post", { status: 500 })
	}
}
