import { NextRequest, NextResponse } from "next/server"
import { getAllPost, createPost, insertData } from "@models/post"

export const GET = async (request: NextRequest) => {
	try {
		const posts = await getAllPost()
		return NextResponse.json(posts, { status: 200 })
	} catch (error) {
		return new Response("Failed to fetch all posts", { status: 500 })
	}
}

export const POST = async (request: NextRequest) => {
	try {
		const postData: insertData = await request.json()
		const posts = await createPost(postData)
		return NextResponse.json(posts, { status: 200 })
	} catch (error) {
		return new Response("Failed to post", { status: 500 })
	}
}
