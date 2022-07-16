import { createRouter } from "./context";

export const postRouter = createRouter().query("getAll", {
  async resolve({ ctx }) {
    return await ctx.prisma.post.findMany();
  },
});
