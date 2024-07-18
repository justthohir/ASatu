import prisma from "@utils/database"

export type dataContribute = {
	userId: number
	postId: number
}

export const getContributorPost = async (postId: number) => {
	const contributor = await prisma.contributor.findMany({
		include: {
			user: true,
		},
		where: {
			postId,
			contributorStatus: 1,
		},
	})
	return contributor
}

export const getContributorUser = async (userId: number) => {
	const contributor = await prisma.contributor.findMany({
		include: {
			post: true,
		},
		where: {
			userId,
			contributorStatus: 1,
		},
	})
	return contributor
}

export const requestContribute = async (reqData: dataContribute) => {
	try {
		const reqcont = await prisma.contributor.create({
			data: {
				userId: reqData.userId,
				postId: reqData.postId,
			},
		})
		return reqcont
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const accContribute = async (id: number) => {
	try {
		const acc = await prisma.contributor.update({
			data: {
				contributorStatus: 1,
			},
			where: {
				id,
			},
		})
		return acc
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}
