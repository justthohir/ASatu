import prisma from "@utils/database"

type RegisterData = {
	email: string
	username: string
	name: string
	hashedPassword: string
}

type profilData = {
	name?: string
	username?: string
	bio?: string
	profileImage?: string
	coverImage?: string
}

export const getAllUsers = async () => {
	const users = await prisma.user.findMany({
		where: { userStatus: 1 },
		orderBy: {
			createdAt: "desc",
		},
	})
	return users
}

export const getUserById = async (id: number) => {
	const user = await prisma.user.findUnique({
		where: {
			id,
		},
	})
	if (!user) {
		return {}
	}
	return user
}

export const getUserByUsername = async (username: string) => {
	const user = await prisma.user.findUnique({
		where: {
			username,
		},
	})
	if (!user) {
		return {}
	}
	return user
}

export const register = async (regData: RegisterData) => {
	try {
		const user = await prisma.user.create({
			data: {
				email: regData.email,
				username: regData.username,
				name: regData.name,
				hashedPassword: regData.hashedPassword,
				userStatus: 1,
			},
		})
		return user
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const editUser = async (id: number, pData: profilData) => {
	try {
		const updatedUser = await prisma.user.update({
			where: {
				id: id,
			},
			data: {
				name: pData.name,
				username: pData.username,
				bio: pData.bio,
				profileImage: pData.profileImage,
				coverImage: pData.coverImage,
			},
		})
		return updatedUser
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const susUser = async (id: number) => {
	try {
		const updatedUser = await prisma.user.update({
			where: {
				id: id,
			},
			data: {
				userStatus: 0,
			},
		})
		return updatedUser
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}

export const unsusUser = async (id: number) => {
	try {
		const updatedUser = await prisma.user.update({
			where: {
				id: id,
			},
			data: {
				userStatus: 1,
			},
		})
		return updatedUser
	} catch (error) {
		throw new Error("Something went wrong.")
	}
}
