import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Generate a unique employee ID
function generateEid(): string {
  const prefix = "ZAX";
  const random = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");
  return `${prefix}${random}`;
}

// List all employees
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("employees").order("desc").collect();
  },
});

// Create a new employee
export const create = mutation({
  args: {
    first: v.string(),
    last: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    role: v.optional(
      v.union(
        v.literal("franchise_owner"),
        v.literal("above_store_team"),
        v.literal("store_manager"),
        v.literal("assistant_manager"),
        v.literal("shift_leader"),
        v.literal("team_member"),
      ),
    ),
    position: v.optional(
      v.union(
        v.literal("cashier"),
        v.literal("cook"),
        v.literal("trainer"),
        v.literal("shift leader"),
        v.literal("gm"),
        v.literal("above store"),
      ),
    ),
    storeId: v.optional(v.string()),
    hireDate: v.optional(v.string()),
    status: v.union(
      v.literal("active"),
      v.literal("inactive"),
      v.literal("pending"),
      v.literal("terminated"),
    ),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("employees")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      throw new Error("An employee with this email already exists");
    }

    const now = Date.now();
    const eid = generateEid();

    return await ctx.db.insert("employees", {
      ...args,
      eid,
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Update employee status
export const updateStatus = mutation({
  args: {
    id: v.id("employees"),
    status: v.union(
      v.literal("active"),
      v.literal("inactive"),
      v.literal("pending"),
      v.literal("terminated"),
    ),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, {
      status: args.status,
      updatedAt: Date.now(),
    });
  },
});

// Create a new employee (legacy function name)
export const createEmployee = mutation({
  args: {
    first: v.string(),
    last: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    role: v.optional(
      v.union(
        v.literal("franchise_owner"),
        v.literal("above_store_team"),
        v.literal("store_manager"),
        v.literal("assistant_manager"),
        v.literal("shift_leader"),
        v.literal("team_member"),
      ),
    ),
    position: v.optional(
      v.union(
        v.literal("cashier"),
        v.literal("cook"),
        v.literal("trainer"),
        v.literal("shift leader"),
        v.literal("gm"),
        v.literal("above store"),
      ),
    ),
    storeId: v.optional(v.string()),
    hireDate: v.optional(v.string()),
    ssnLast4: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Validate ssnLast4 if provided - must be exactly 4 digits
    if (args.ssnLast4 && !/^\d{4}$/.test(args.ssnLast4)) {
      throw new Error("ssnLast4 must be exactly 4 digits");
    }

    // Check if email already exists
    const existing = await ctx.db
      .query("employees")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      throw new Error("An employee with this email already exists");
    }

    const now = Date.now();
    const eid = generateEid();

    return await ctx.db.insert("employees", {
      ...args,
      eid,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Get employee by ID
export const getEmployee = query({
  args: { id: v.id("employees") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Get employee by EID
export const getEmployeeByEid = query({
  args: { eid: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("employees")
      .withIndex("by_eid", (q) => q.eq("eid", args.eid))
      .first();
  },
});

// Get employee by email
export const getEmployeeByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("employees")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
  },
});

// Get employees by store
export const getByStore = query({
  args: { storeId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("employees")
      .withIndex("by_store", (q) => q.eq("storeId", args.storeId))
      .collect();
  },
});

// Get active employees
export const getActive = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("employees")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();
  },
});

// List employees with filters
export const listEmployees = query({
  args: {
    status: v.optional(
      v.union(
        v.literal("active"),
        v.literal("inactive"),
        v.literal("pending"),
        v.literal("terminated"),
      ),
    ),
    storeId: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    if (args.status) {
      return await ctx.db
        .query("employees")
        .withIndex("by_status", (q) => q.eq("status", args.status!))
        .order("desc")
        .take(args.limit ?? 100);
    }

    if (args.storeId) {
      return await ctx.db
        .query("employees")
        .withIndex("by_store", (q) => q.eq("storeId", args.storeId!))
        .order("desc")
        .take(args.limit ?? 100);
    }

    return await ctx.db
      .query("employees")
      .order("desc")
      .take(args.limit ?? 100);
  },
});

// Update employee
export const updateEmployee = mutation({
  args: {
    id: v.id("employees"),
    first: v.optional(v.string()),
    last: v.optional(v.string()),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    role: v.optional(
      v.union(
        v.literal("franchise_owner"),
        v.literal("above_store_team"),
        v.literal("store_manager"),
        v.literal("assistant_manager"),
        v.literal("shift_leader"),
        v.literal("team_member"),
      ),
    ),
    position: v.optional(
      v.union(
        v.literal("cashier"),
        v.literal("cook"),
        v.literal("trainer"),
        v.literal("shift leader"),
        v.literal("gm"),
        v.literal("above store"),
      ),
    ),
    storeId: v.optional(v.string()),
    hireDate: v.optional(v.string()),
    status: v.optional(
      v.union(
        v.literal("active"),
        v.literal("inactive"),
        v.literal("pending"),
        v.literal("terminated"),
      ),
    ),
    clerkUserId: v.optional(v.string()),
    hourlyRate: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const existing = await ctx.db.get(id);
    if (!existing) {
      throw new Error("Employee not found");
    }

    // If updating email, check it's not already taken
    if (updates.email && updates.email !== existing.email) {
      const emailTaken = await ctx.db
        .query("employees")
        .withIndex("by_email", (q) => q.eq("email", updates.email!))
        .first();
      if (emailTaken) {
        throw new Error("This email is already in use");
      }
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

// Verify employee (for onboarding)
export const verifyEmployee = mutation({
  args: {
    eid: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const employee = await ctx.db
      .query("employees")
      .withIndex("by_eid", (q) => q.eq("eid", args.eid))
      .first();

    if (!employee) {
      throw new Error("Employee not found");
    }

    if (employee.email !== args.email) {
      throw new Error("Email does not match");
    }

    return employee;
  },
});

// Activate employee
export const activateEmployee = mutation({
  args: {
    id: v.id("employees"),
    clerkUserId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, {
      status: "active",
      clerkUserId: args.clerkUserId,
      updatedAt: Date.now(),
    });
  },
});

// Delete employee (soft delete via status change)
export const deleteEmployee = mutation({
  args: { id: v.id("employees") },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, {
      status: "terminated",
      updatedAt: Date.now(),
    });
  },
});
