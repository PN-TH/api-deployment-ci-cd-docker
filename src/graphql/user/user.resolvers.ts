import { prisma } from "../../config/database";


interface UserInput {
    name: string;
    email: string;
}

export const userResolvers = {
    Query: {
        getUsers: async () => {
            return await prisma.user.findMany();
        },
        getUser: async (_: unknown, { id }: { id: number }) => {
            return await prisma.user.findUnique({ where: { id } });
        },
    },
    Mutation: {
        createUser: async (_: unknown, { name, email }: UserInput) => {
            return await prisma.user.create({
                data: { name, email },
            });
        },
    },
};
