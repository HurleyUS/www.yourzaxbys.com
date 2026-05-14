/**
 * Employee types and utilities for the Zaxby's Franchise Management Platform
 */

import { z } from "zod";

// Employee ID - can be various formats depending on store
export type EID = string;

// Social Security Number format: XXX-XX-XXXX
export type SSN = string;

export interface EmployeeProps {
  eid?: string;
  first: string;
  last: string;
  email: string;
  phone?: string;
  role: EmployeeRole;
  storeId?: string;
  hireDate?: string;
  status?: EmployeeStatus;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  dob?: string;
  ssnLast4?: string;
  payType?: "hourly" | "salary";
  payRate?: number;
}

export type EmployeeRole =
  | "franchise_owner"
  | "above_store_team"
  | "store_manager"
  | "assistant_manager"
  | "shift_leader"
  | "team_member";

export type EmployeeStatus = "active" | "inactive" | "pending" | "terminated";

export const ROLE_LABELS: Record<EmployeeRole, string> = {
  franchise_owner: "Franchise Owner",
  above_store_team: "Above Store Team",
  store_manager: "Store Manager",
  assistant_manager: "Assistant Manager",
  shift_leader: "Shift Leader",
  team_member: "Team Member",
};

export const STATUS_LABELS: Record<EmployeeStatus, string> = {
  active: "Active",
  inactive: "Inactive",
  pending: "Pending",
  terminated: "Terminated",
};

// Validators
export const validateEID = (eid: string): EID => {
  // The EID format seems to be a store code + 4 digits, not ZAX format
  // Based on the usage in create.tsx which generates "22703" + last4 digits
  if (!/^\d{9}$/.test(eid)) {
    throw new Error("Invalid EID format");
  }
  return eid as EID;
};

export const isValidEID = (eid: string): boolean => {
  return /^\d{9}$/.test(eid) || /^ZAX\d{6}$/.test(eid);
};

// Zod validators
// Full SSN validator - used client-side only for EID generation, NEVER stored
export const ssn = z
  .string()
  .regex(/^\d{3}-\d{2}-\d{4}$/, "SSN must be in format XXX-XX-XXXX")
  .optional();

// Last 4 digits of SSN - the ONLY SSN data that may be stored
export const ssnLast4 = z
  .string()
  .regex(/^\d{4}$/, "Must be exactly 4 digits")
  .optional();

export const dob = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Date of birth must be in format YYYY-MM-DD")
  .optional();

export const email = z
  .string()
  .email("Invalid email address")
  .min(1, "Email is required");

export const phone = z
  .string()
  .regex(/^\d{3}-\d{3}-\d{4}$/, "Phone must be in format XXX-XXX-XXXX")
  .optional();

// Employee Zod schema for form validation
export const EmployeeObject = z.object({
  eid: z.string().optional(),
  first: z.string().min(1, "First name is required"),
  last: z.string().min(1, "Last name is required"),
  email: email,
  phone: phone,
  role: z
    .enum([
      "franchise_owner",
      "above_store_team",
      "store_manager",
      "assistant_manager",
      "shift_leader",
      "team_member",
    ])
    .optional(),
  position: z
    .enum(["cashier", "cook", "trainer", "shift leader", "gm", "above store"])
    .optional(),
  storeId: z.string().optional(),
  hireDate: z.string().optional(),
  status: z.enum(["active", "inactive", "pending", "terminated"]).optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  dob: dob,
  ssn: ssn, // Client-side only, used for EID generation, never sent to server
  ssnLast4: ssnLast4, // Only last 4 digits stored
  payType: z.enum(["hourly", "salary"]).optional(),
  payRate: z.number().optional(),
});

// Type alias for the Zod schema
export type EmployeeFormData = z.infer<typeof EmployeeObject>;
