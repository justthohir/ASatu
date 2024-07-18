import { NextRequest, NextResponse } from "next/server"
import { addUpVote, dataVote, deleteUpvote } from "@models/vote"

export const POST = async (request: NextRequest) => {
	try {
		const voteData: dataVote = await request.json()
		const vote = await addUpVote(voteData)
		return NextResponse.json(vote, { status: 200 })
	} catch (error) {
		return new Response("Failed to upvote", { status: 500 })
	}
}

export const DELETE = async (request: NextRequest) => {
	try {
		const voteData: dataVote = await request.json()
		const vote = await deleteUpvote(voteData)
		return NextResponse.json(vote, { status: 200 })
	} catch (error) {
		return new Response("Failed to upvote", { status: 500 })
	}
}
