import prisma from "@utils/database"
import { incrementComment } from "./post"

export type dataComment = {
	userId: number
	postId: number
	body: string
	parent?: number
}

export const getCommentPost = async (postId: number) => {
	const comments = await prisma.comment.findMany({
		include: {
			user: true,
		},
		where: {
			postId,
		},
	})
	return comments
}

export const getCommentPostNested = async (postId: number) => {
	// TODO => adding Types...???!!?!?!?!?
	const comments = await prisma.comment.findMany({
		include: {
			user: true,
		},
		where: {
			postId,
		},
	})
	const ret: any = []
	const parent = comments.filter(({ parentId }) => parentId == null)
	const child = comments.filter(({ parentId }) => parentId != null)
	parent.map((com) => {
		const anak = child.filter(({ parentId }) => parentId == com.id)
		ret.push({
			...com,
			childs: anak,
		})
	})
	return ret
}

export const getCommentUser = async (userId: number) => {
	const comments = await prisma.comment.findMany({
		include: {
			post: true,
		},
		where: {
			userId,
		},
	})
	return comments
}

export const addComment = async (pData: dataComment) => {
	try {
		const comment = await prisma.comment.create({
			data: {
				userId: pData.userId,
				postId: pData.postId,
				body: pData.body,
				parentId: pData.parent,
				commentStatus: 1,
			},
		})
		await incrementComment(pData.postId)
		return comment
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const editComment = async (id: number, body: string) => {
	try {
		const comment = await prisma.comment.update({
			where: {
				id,
			},
			data: {
				body,
				edited: true,
			},
		})
		return comment
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const susComment = async (id: number) => {
	try {
		const comment = await prisma.comment.update({
			where: {
				id,
			},
			data: {
				commentStatus: 0,
			},
		})
		return comment
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const unsusComment = async (id: number) => {
	try {
		const comment = await prisma.comment.update({
			where: {
				id,
			},
			data: {
				commentStatus: 1,
			},
		})
		return comment
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}
