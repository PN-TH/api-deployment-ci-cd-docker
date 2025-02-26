
import { prismaMock } from "../../../singleton";
import { userResolvers } from "./user.resolvers";

describe.only("🔍 Test des resolvers User (Unit Tests)", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("✅ `getUsers` doit retourner une liste d’utilisateurs avec les bons IDs", async () => {
        prismaMock.user.findMany.mockReturnValueOnce([
            { id: 1, name: "John Doe", email: "john@example.com" },
        ] as any);

        const users = await userResolvers.Query.getUsers();

        console.log("🚀 Utilisateurs retournés :", users); // 🔍 Debug ici

        expect(users.length).toBe(1);
        expect(users[0].id).toBe(1);
    });
});