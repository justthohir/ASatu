import prisma from "@utils/database"

export const GET = async (request: Request) => {
	try {
		const users = await prisma.user.findMany({
			orderBy: {
				createdAt: "desc",
			},
		})
		return new Response(JSON.stringify(users), { status: 200 })
	} catch (error) {
		return new Response("Failed to fetch all users", { status: 500 })
	}
}
