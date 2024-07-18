import { NextRequest, NextResponse } from "next/server"
import { getCommentPostNested } from "@models/comment"

export const GET = async (
	request: NextRequest,
	{ params }: { params: { postId: string } },
) => {
	try {
		const postId = Number(params.postId)
		const comments = await getCommentPostNested(postId)
		return NextResponse.json(comments, { status: 200 })
	} catch (error) {
		console.log(error)
		return new Response("Failed to fetch all comment", { status: 500 })
	}
}
