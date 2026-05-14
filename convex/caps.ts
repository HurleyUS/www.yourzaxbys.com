import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Create a new CAP
export const createCap = mutation({
  args: {
    type: v.union(v.literal("fs"), v.literal("rer")),
    score: v.number(),
    inspector: v.string(),
    mod: v.string(),
    date: v.number(),
    responses: v.array(
      v.object({
        observation: v.string(),
        solution: v.string(),
        plan: v.string(),
      }),
    ),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("caps", {
      ...args,
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Get a single CAP by ID
export const getCap = query({
  args: { id: v.id("caps") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// List all CAPs
export const listCaps = query({
  args: {
    type: v.optional(v.union(v.literal("fs"), v.literal("rer"))),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    if (args.type) {
      const caps = await ctx.db
        .query("caps")
        .withIndex("by_type", (q) => q.eq("type", args.type!))
        .order("desc")
        .take(args.limit ?? 50);
      return caps;
    }

    const caps = await ctx.db
      .query("caps")
      .order("desc")
      .take(args.limit ?? 50);
    return caps;
  },
});

// Update a CAP
export const updateCap = mutation({
  args: {
    id: v.id("caps"),
    type: v.optional(v.union(v.literal("fs"), v.literal("rer"))),
    score: v.optional(v.number()),
    inspector: v.optional(v.string()),
    mod: v.optional(v.string()),
    date: v.optional(v.number()),
    responses: v.optional(
      v.array(
        v.object({
          observation: v.string(),
          solution: v.string(),
          plan: v.string(),
        }),
      ),
    ),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const existing = await ctx.db.get(id);
    if (!existing) {
      throw new Error("CAP not found");
    }

    const filteredUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, v]) => v !== undefined),
    );

    return await ctx.db.patch(id, {
      ...filteredUpdates,
      updatedAt: Date.now(),
    });
  },
});

// Delete a CAP
export const deleteCap = mutation({
  args: { id: v.id("caps") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
