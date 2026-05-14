"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { EmployeeObject, EmployeeProps } from "@/lib/employee";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormGroup,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  PayTypeOptions,
  PositionOptions,
  StateOptions,
  StatusOptions,
} from "../options";

export default function EmployeeEditForm({ eid }: { eid: string }) {
  const router = useRouter();
  const employee = useQuery(api.employees.getEmployeeByEid, {
    eid: eid,
  });
  const updateEmployee = useMutation(api.employees.updateEmployee);

  const [submitting, setSubmitting] = useState(false);

  const form = useForm<z.infer<typeof EmployeeObject>>({
    resolver: zodResolver(EmployeeObject),
    defaultValues: employee
      ? { ...(employee as z.infer<typeof EmployeeObject>) }
      : undefined,
  });

  useEffect(() => {
    if (employee) {
      // For date inputs, we just need to ensure the date string is in YYYY-MM-DD format
      // No timezone adjustment needed since we're working with date strings
      const formatDateForInput = (value?: string) => {
        if (!value) return value;
        // If it's already in YYYY-MM-DD format, return as is
        if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          return value;
        }
        // Otherwise, try to parse and format it
        const d = new Date(value);
        if (Number.isNaN(d.getTime())) return value;
        // Use local date components to avoid timezone issues
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };
      form.reset({
        ...(employee as unknown as z.infer<typeof EmployeeObject>),
        dob: formatDateForInput(employee.dob) as unknown as string,
        hireDate: formatDateForInput(
          employee.hireDate || employee.hired,
        ) as unknown as string,
      });
    }
  }, [employee, form]);

  const onSubmit = async (data: z.infer<typeof EmployeeObject>) => {
    setSubmitting(true);
    if (!employee?._id) return;
    await updateEmployee({ id: employee._id, ...data } as unknown as {
      id: Parameters<typeof updateEmployee>[0]["id"];
    } & z.infer<typeof EmployeeObject>);
    setSubmitting(false);
    router.push("/dashboard/team");
  };

  if (!employee) return null;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-md">
        <FormGroup title="Name">
          <FormField
            name="first"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>First</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="last"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormGroup>

        <FormGroup title="Contact">
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormGroup>

        <FormGroup title="Address">
          <FormField
            name="address"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-2">
            <FormField
              name="city"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="state"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value ?? employee.state}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <StateOptions />
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="zip"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormGroup>

        <FormGroup title="Identification">
          <FormField
            name="eid"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employee ID</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {employee.ssnLast4 && (
            <FormItem>
              <FormLabel>SSN</FormLabel>
              <FormControl>
                <Input
                  value={`***-**-${employee.ssnLast4}`}
                  disabled
                  readOnly
                />
              </FormControl>
            </FormItem>
          )}
          <FormField
            name="dob"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormGroup>

        <FormGroup title="Employment">
          <FormField
            name="hireDate"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hired Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="position"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <Select
                    value={field.value ?? employee.position}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <PositionOptions />
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="status"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select
                    value={field.value ?? employee.status}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <StatusOptions />
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormGroup>

        <FormGroup title="Compensation">
          <FormField
            name="payRate"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pay Rate</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="payType"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pay Type</FormLabel>
                <FormControl>
                  <Select
                    value={field.value ?? employee.type}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <PayTypeOptions />
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormGroup>

        <Button type="submit" disabled={submitting}>
          {submitting ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </Form>
  );
}
