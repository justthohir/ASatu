import prisma from "@utils/database"

export type insertData = {
	author: number
	body: string
	location?: string
	geoLocation?: string
}

export const getAllPost = async () => {
	const posts = await prisma.post.findMany({
		include: {
			media: true,
			user: true,
			contributor: true,
			// comments: true,
			// upvotes: true,
			// downvotes: true,
		},
		orderBy: {
			createdAt: "desc",
		},
	})
	return posts
}

export const getPostById = async (id: number) => {
	const posts = await prisma.post.findMany({
		where: {
			id,
		},
		include: {
			media: true,
			user: true,
			contributor: true,
			// comments: true,
			// upvotes: true,
			// downvotes: true,
		},
		orderBy: {
			createdAt: "desc",
		},
	})
	return posts
}

export const getPostByUser = async (author: number) => {
	const posts = await prisma.post.findMany({
		where: {
			author,
		},
		include: {
			media: true,
			user: true,
			contributor: true,
			// comments: true,
			// upvotes: true,
			// downvotes: true,
		},
		orderBy: {
			createdAt: "desc",
		},
	})
	return posts
}

export const createPost = async (iData: insertData) => {
	try {
		const post = await prisma.post.create({
			data: {
				author: iData.author,
				body: iData.body,
				location: iData.location,
				geoLocation: iData.geoLocation,
				postStatus: 1,
			},
		})
		return post
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const incrementUpVote = async (id: number) => {
	try {
		const post = await prisma.post.update({
			data: {
				sumUpVote: { increment: 1 },
			},
			where: {
				id,
			},
		})
		return post
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const incrementDownVote = async (id: number) => {
	try {
		const post = await prisma.post.update({
			data: {
				sumDownVote: { increment: 1 },
			},
			where: {
				id,
			},
		})
		return post
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const decrementUpVote = async (id: number) => {
	try {
		const post = await prisma.post.update({
			data: {
				sumUpVote: { decrement: 1 },
			},
			where: {
				id,
			},
		})
		return post
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const decrementDownVote = async (id: number) => {
	try {
		const post = await prisma.post.update({
			data: {
				sumDownVote: { decrement: 1 },
			},
			where: {
				id,
			},
		})
		return post
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const incrementComment = async (id: number) => {
	try {
		const post = await prisma.post.update({
			data: {
				sumComment: { increment: 1 },
			},
			where: {
				id,
			},
		})
		return post
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}
