import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Employees table
  employees: defineTable({
    eid: v.string(),
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
    // Legacy fields for existing data
    hired: v.optional(v.string()),
    address: v.optional(v.string()),
    city: v.optional(v.string()),
    state: v.optional(v.string()),
    zip: v.optional(v.string()),
    dob: v.optional(v.string()),
    // SECURITY: SSN should NEVER be stored. Use ssnLast4 for display only.
    // Full SSN is only used client-side for EID generation, then discarded.
    ssnLast4: v.optional(v.string()), // Last 4 digits only, for display purposes
    rate: v.optional(v.string()),
    type: v.optional(v.string()),
    status: v.union(
      v.literal("active"),
      v.literal("inactive"),
      v.literal("pending"),
      v.literal("terminated"),
    ),
    clerkUserId: v.optional(v.string()),
    hourlyRate: v.optional(v.number()),
    createdAt: v.optional(v.number()),
    updatedAt: v.optional(v.number()),
  })
    .index("by_email", ["email"])
    .index("by_eid", ["eid"])
    .index("by_status", ["status"])
    .index("by_store", ["storeId"])
    .index("by_clerk_user", ["clerkUserId"]),

  // Stores table
  stores: defineTable({
    name: v.string(),
    storeNumber: v.string(),
    address: v.string(),
    city: v.string(),
    state: v.string(),
    zip: v.string(),
    phone: v.optional(v.string()),
    franchiseOwnerId: v.optional(v.string()),
    status: v.union(v.literal("active"), v.literal("inactive")),
    createdAt: v.optional(v.number()),
    updatedAt: v.optional(v.number()),
  })
    .index("by_store_number", ["storeNumber"])
    .index("by_owner", ["franchiseOwnerId"])
    .index("by_status", ["status"]),

  // Schedules table
  schedules: defineTable({
    storeId: v.string(),
    weekStartDate: v.string(), // ISO date string (e.g., "2024-02-05")
    status: v.union(
      v.literal("draft"),
      v.literal("published"),
      v.literal("archived"),
    ),
    publishedAt: v.optional(v.number()),
    publishedBy: v.optional(v.string()),
    createdBy: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_store", ["storeId"])
    .index("by_week", ["weekStartDate"])
    .index("by_store_and_week", ["storeId", "weekStartDate"]),

  // Shifts table
  shifts: defineTable({
    scheduleId: v.id("schedules"),
    employeeId: v.id("employees"),
    storeId: v.string(),
    date: v.string(), // ISO date string
    startTime: v.string(), // "HH:MM" format
    endTime: v.string(), // "HH:MM" format
    position: v.optional(v.string()),
    notes: v.optional(v.string()),
    status: v.union(
      v.literal("scheduled"),
      v.literal("confirmed"),
      v.literal("completed"),
      v.literal("cancelled"),
      v.literal("no_show"),
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_schedule", ["scheduleId"])
    .index("by_employee", ["employeeId"])
    .index("by_date", ["date"])
    .index("by_store_and_date", ["storeId", "date"]),

  // Corrective Action Plans (CAPs)
  caps: defineTable({
    type: v.union(v.literal("fs"), v.literal("rer")),
    score: v.number(),
    inspector: v.string(),
    mod: v.string(),
    date: v.number(),
    storeId: v.optional(v.string()),
    responses: v.array(
      v.object({
        observation: v.string(),
        solution: v.string(),
        plan: v.string(),
      }),
    ),
    createdBy: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_type", ["type"])
    .index("by_date", ["date"])
    .index("by_store", ["storeId"]),

  // Audits table
  audits: defineTable({
    storeId: v.string(),
    type: v.union(
      v.literal("steritech"),
      v.literal("health_department"),
      v.literal("internal"),
      v.literal("rer"),
    ),
    score: v.number(),
    maxScore: v.number(),
    inspector: v.string(),
    date: v.number(),
    notes: v.optional(v.string()),
    findings: v.optional(
      v.array(
        v.object({
          category: v.string(),
          observation: v.string(),
          severity: v.union(
            v.literal("critical"),
            v.literal("major"),
            v.literal("minor"),
          ),
          correctionRequired: v.boolean(),
        }),
      ),
    ),
    createdBy: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_store", ["storeId"])
    .index("by_type", ["type"])
    .index("by_date", ["date"]),

  // Feedback surveys
  feedback: defineTable({
    surveyType: v.string(),
    rating: v.number(),
    comments: v.optional(v.string()),
    employeeId: v.optional(v.string()),
    storeId: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_store", ["storeId"])
    .index("by_type", ["surveyType"]),

  // Sales data
  salesData: defineTable({
    storeId: v.string(),
    date: v.string(), // ISO date string
    totalSales: v.number(),
    transactions: v.number(),
    laborCost: v.number(),
    laborHours: v.number(),
    wasteValue: v.optional(v.number()),
    averageTicket: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_store", ["storeId"])
    .index("by_date", ["date"])
    .index("by_store_and_date", ["storeId", "date"]),

  // Notifications
  notifications: defineTable({
    userId: v.string(), // Clerk user ID
    title: v.string(),
    message: v.string(),
    type: v.union(
      v.literal("info"),
      v.literal("warning"),
      v.literal("error"),
      v.literal("success"),
    ),
    read: v.boolean(),
    link: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_and_read", ["userId", "read"]),
});
