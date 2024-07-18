import { NextRequest, NextResponse } from "next/server"
import {
	dataComment,
	addComment,
	editComment,
	getCommentPostNested,
} from "@models/comment"

export const POST = async (request: NextRequest) => {
	try {
		const commentData: dataComment = await request.json()
		const comment = await addComment(commentData)
		return NextResponse.json(comment, { status: 200 })
	} catch (error) {
		return new Response("Failed to post comment", { status: 500 })
	}
}

export const PATCH = async (request: NextRequest) => {
	try {
		const { id, body }: { id: number; body: string } = await request.json()
		const comment = await editComment(id, body)
		return NextResponse.json(comment, { status: 200 })
	} catch (error) {
		return new Response("Failed to patch comment", { status: 500 })
	}
}

// for testing

export const GET = async (request: NextRequest) => {
	try {
		const comments = await getCommentPostNested(1)
		return NextResponse.json(comments, { status: 200 })
	} catch (error) {
		console.log(error)
		return new Response("Failed to fetch all comment", { status: 500 })
	}
}
