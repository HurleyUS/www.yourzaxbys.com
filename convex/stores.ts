import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("stores").order("desc").collect();
  },
});

export const getByStoreNumber = query({
  args: { storeNumber: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("stores")
      .withIndex("by_store_number", (q) =>
        q.eq("storeNumber", args.storeNumber),
      )
      .first();
  },
});

export const getById = query({
  args: { id: v.id("stores") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getActive = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("stores")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    storeNumber: v.string(),
    address: v.string(),
    city: v.string(),
    state: v.string(),
    zip: v.string(),
    phone: v.optional(v.string()),
    franchiseOwnerId: v.optional(v.string()),
    status: v.union(v.literal("active"), v.literal("inactive")),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("stores", {
      ...args,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("stores"),
    name: v.optional(v.string()),
    storeNumber: v.optional(v.string()),
    address: v.optional(v.string()),
    city: v.optional(v.string()),
    state: v.optional(v.string()),
    zip: v.optional(v.string()),
    phone: v.optional(v.string()),
    franchiseOwnerId: v.optional(v.string()),
    status: v.optional(v.union(v.literal("active"), v.literal("inactive"))),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const filteredUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, value]) => value !== undefined),
    );

    return await ctx.db.patch(id, {
      ...filteredUpdates,
      updatedAt: Date.now(),
    });
  },
});

export const remove = mutation({
  args: { id: v.id("stores") },
  handler: async (ctx, args) => {
    // Soft delete by setting status to inactive
    return await ctx.db.patch(args.id, {
      status: "inactive",
      updatedAt: Date.now(),
    });
  },
});

export const hardDelete = mutation({
  args: { id: v.id("stores") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
