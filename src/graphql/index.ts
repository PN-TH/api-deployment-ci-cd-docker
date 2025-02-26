import { mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { userTypeDefs } from "./user/user.schema";
import { userResolvers } from "./user/user.resolvers";

export const schema = makeExecutableSchema({
    typeDefs: [userTypeDefs],
    resolvers: mergeResolvers([userResolvers]),
});
