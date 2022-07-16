import { postRouter } from "./post";
// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

//import { exampleRouter } from "./example";
import { authRouter } from "./auth";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("auth.", authRouter)
  .merge("post.", postRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
