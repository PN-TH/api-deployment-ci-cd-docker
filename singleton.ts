import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset, DeepMockProxy } from "jest-mock-extended";

import prisma from "./src/client"; // ✅ Assure-toi que ce chemin est correct !


jest.mock("./src/client", () => ({
    __esModule: true,
    default: mockDeep<PrismaClient>(),
}));

// ✅ Exporte le mock pour être utilisé dans les tests
export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

// ✅ Réinitialise Prisma avant chaque test
beforeEach(() => {
    mockReset(prismaMock);
});
