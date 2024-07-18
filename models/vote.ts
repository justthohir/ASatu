import prisma from "@utils/database"
import {
	decrementDownVote,
	decrementUpVote,
	incrementDownVote,
	incrementUpVote,
} from "./post"

export type dataVote = {
	userId: number
	postId: number
}

export const getUpVotePost = async (postId: number) => {
	const upvotes = await prisma.upVote.findMany({
		include: {
			user: true,
		},
		where: {
			postId,
		},
		orderBy: {
			createdAt: "desc",
		},
	})
	return upvotes
}

export const getUpVoteUser = async (userId: number) => {
	const upvotes = await prisma.upVote.findMany({
		include: {
			post: true,
		},
		where: {
			userId,
		},
		orderBy: {
			createdAt: "desc",
		},
	})
	return upvotes
}

export const getDownVotePost = async (postId: number) => {
	const upvotes = await prisma.downVote.findMany({
		include: {
			user: true,
		},
		where: {
			postId,
		},
		orderBy: {
			createdAt: "desc",
		},
	})
	return upvotes
}

export const getDownVoteUser = async (userId: number) => {
	const upvotes = await prisma.downVote.findMany({
		include: {
			post: true,
		},
		where: {
			userId,
		},
		orderBy: {
			createdAt: "desc",
		},
	})
	return upvotes
}

// -

export const validUpVote = async (vote: dataVote) => {
	const validvote = await prisma.upVote.count({
		where: {
			userId: vote.userId,
			postId: vote.postId,
		},
	})
	return validvote
}

export const validDownVote = async (vote: dataVote) => {
	const validvote = await prisma.downVote.count({
		where: {
			userId: vote.userId,
			postId: vote.postId,
		},
	})
	return validvote
}

// -

export const deleteUpvote = async (vote: dataVote) => {
	try {
		const delVote = await prisma.upVote.deleteMany({
			where: {
				userId: vote.userId,
				postId: vote.postId,
			},
		})
		await decrementUpVote(vote.postId)
		return delVote
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const deleteDownvote = async (vote: dataVote) => {
	try {
		const delVote = await prisma.downVote.deleteMany({
			where: {
				userId: vote.userId,
				postId: vote.postId,
			},
		})
		await decrementDownVote(vote.postId)
		return delVote
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const addUpVote = async (vote: dataVote) => {
	try {
		const isUpVote = await validUpVote(vote)
		if (isUpVote === 0) {
			const isDownVote = await validDownVote(vote)
			if (isDownVote !== 0) {
				await deleteDownvote(vote)
			}
			const upvote = await prisma.upVote.create({
				data: {
					userId: vote.userId,
					postId: vote.postId,
				},
			})
			await incrementUpVote(vote.postId)
			return upvote
		}
		return false
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const addDownVote = async (vote: dataVote) => {
	try {
		const isDownVote = await validDownVote(vote)
		if (isDownVote === 0) {
			const isUpVote = await validUpVote(vote)
			if (isUpVote !== 0) {
				await deleteUpvote(vote)
			}
			const downvote = await prisma.downVote.create({
				data: {
					userId: vote.userId,
					postId: vote.postId,
				},
			})
			await incrementDownVote(vote.postId)
			return downvote
		}
		return false
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}
