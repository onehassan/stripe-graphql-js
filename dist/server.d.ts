import { schema } from "./schema";
import { Context, CreateServerProps } from "./types";
declare const createStripeGraphQLServer: (params?: CreateServerProps) => import("graphql-yoga").YogaServerInstance<{}, Context>;
export { createStripeGraphQLServer, schema };
//# sourceMappingURL=server.d.ts.map