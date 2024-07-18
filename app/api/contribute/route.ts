import { NextRequest, NextResponse } from "next/server"
import {
	accContribute,
	dataContribute,
	requestContribute,
} from "@models/contributor"

export const POST = async (request: NextRequest) => {
	try {
		const contributeData: dataContribute = await request.json()
		const contribute = await requestContribute(contributeData)
		return NextResponse.json(contribute, { status: 200 })
	} catch (error) {
		return new Response("Failed to request contribute", { status: 500 })
	}
}

export const PATCH = async (request: NextRequest) => {
	try {
		const { id } = await request.json()
		const contribute = await accContribute(id)
		return NextResponse.json(contribute, { status: 200 })
	} catch (error) {
		return new Response("Failed to acc contribute", { status: 500 })
	}
}
