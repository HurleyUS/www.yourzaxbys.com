"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  EmployeeProps,
  EmployeeObject,
  SSN,
  validateEID,
  EID,
} from "@/lib/employee";
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
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { z } from "zod";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useRef, useState } from "react";
import { useDate } from "@/lib/client-only";
import { redirect } from "next/navigation";
import {
  PayTypeOptions,
  PositionOptions,
  StateOptions,
  StatusOptions,
} from "../options";

type Error = {
  sender: string;
  message: string;
};

function formatSSN(ssn: string): string {
  const numericValue = ssn.replace(/\D/g, "");
  const parts = [
    numericValue.slice(0, 3),
    numericValue.slice(3, 5),
    numericValue.slice(5),
  ];
  return parts.join("-");
}

export default function EmployeeForm() {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<z.infer<typeof EmployeeObject>>({
    resolver: zodResolver(EmployeeObject),
  });

  const createEmployee = useMutation(api.employees.createEmployee);

  const inviteEmployee = async (data: z.infer<typeof EmployeeObject>) => {
    const errors: Error[] = [];
    const response = await fetch("/api/send/invite", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      errors.push({ sender: "invite", message: "Failed to send invite" });
      throw new Error("Failed to send invite");
    } else {
      return response.json();
    }
  };

  const onSubmit = async (data: z.infer<typeof EmployeeObject>) => {
    const errors: Error[] = [];

    const validated = EmployeeObject.parse(data);
    if (!validated) {
      errors.push({ sender: "create", message: "Invalid data" });
      setSubmitting(false);
      throw new Error("Invalid data");
    }

    try {
      // SECURITY: Never send full SSN to the server
      // Extract last 4 digits for storage, discard the rest
      const { ssn: _ssnDiscarded, ...safeData } = validated;
      const ssnLast4 = _ssnDiscarded
        ? _ssnDiscarded.replace(/\D/g, "").slice(-4)
        : undefined;
      const created = await createEmployee({ ...safeData, ssnLast4 });
    } catch (error) {
      errors.push({ sender: "create", message: "Failed to create employee" });
      setSubmitting(false);
      throw new Error("Failed to create employee");
    }

    const invited = await inviteEmployee(validated);
    if (invited.error) {
      setSubmitting(false);
      errors.push({ sender: "invite", message: "Failed to send invite" });
      throw new Error("Failed to send invite");
    } else {
      if (errors.length > 0) {
        return { ...invited, errors };
      } else {
        redirect("/dashboard/team");
      }
    }
  };

  const handleSubmit = async (data: z.infer<typeof EmployeeObject>) => {
    setSubmitting(true);
    await onSubmit(data);
    setSubmitting(false);
  };

  const generateEID = (ssn: SSN): EID => {
    const last4 = ssn.slice(-4);
    const generatedEID = `22703${last4}`;
    return validateEID(generatedEID);
  };

  const eidWarning = useRef<HTMLDivElement>(null);

  const date = useDate();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="on"
        className="pt-md space-y-md"
      >
        <FormGroup title="Name">
          <FormField
            control={form.control}
            name="first"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    {...form.register("first")}
                    title="First Name"
                    type="text"
                    tabIndex={3}
                    placeholder="Enter First Name"
                    required
                    autoFocus={true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    {...form.register("last")}
                    title="Last Name"
                    type="text"
                    tabIndex={4}
                    placeholder="Enter Last Name"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormGroup>
        <FormGroup title="Contact" className="flex-col p-0 w-full">
          <FormGroup className="w-full p-0">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      {...form.register("phone")}
                      title="Phone"
                      type="tel"
                      tabIndex={5}
                      placeholder="Enter Phone"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      {...form.register("email")}
                      title="Email"
                      type="email"
                      tabIndex={6}
                      placeholder="Enter Email"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormGroup>
          <FormGroup className="w-full p-0">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full p-0">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      {...form.register("address")}
                      title="Address"
                      type="text"
                      placeholder="Enter Address"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormGroup className="w-full p-0 *:shrink-1 *:grow-0">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        {...form.register("city")}
                        title="City"
                        type="text"
                        tabIndex={12}
                        placeholder="Enter City"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="shrink-1 grow-0">
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        {...form.register("state")}
                        required
                        onValueChange={field.onChange}
                        defaultValue={field.value ? field.value : "NC"}
                      >
                        <SelectTrigger tabIndex={13}>
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <StateOptions />
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        {...form.register("zip")}
                        title="Zip"
                        type="text"
                        tabIndex={14}
                        placeholder="Enter Zip"
                        pattern="[0-9]{5}"
                        required
                        maxLength={5}
                        minLength={5}
                        defaultValue={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormGroup>
          </FormGroup>
        </FormGroup>
        <FormGroup title="Identification">
          <FormField
            control={form.control}
            name="ssn"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Social Security Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      {...form.register("ssn")}
                      title="Social Security Number"
                      type="text"
                      tabIndex={1}
                      placeholder="123-45-6789"
                      required
                      onChange={(e) => {
                        const value = formatSSN(e.target.value);
                        form.setValue("ssn", value);
                        form.setValue("eid", generateEID(value));
                      }}
                      onBlur={(e) => {
                        const value = formatSSN(e.target.value);
                        form.setValue("ssn", value);
                        form.setValue("eid", generateEID(value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="eid"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employee ID Number</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    {...form.register("eid")}
                    title="Employee ID Number"
                    type="text"
                    tabIndex={2}
                    placeholder="Enter Employee ID Number"
                    required
                  />
                </FormControl>
                <FormMessage ref={eidWarning} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    {...form.register("dob")}
                    title="Date of Birth"
                    type="date"
                    tabIndex={7}
                    placeholder="Enter Date of Birth"
                    pattern="\d+"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormGroup>
        <FormGroup className="*:shrink-1 *:grow-0">
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    {...form.register("position")}
                    required
                    onValueChange={field.onChange}
                    defaultValue={field.value ? field.value : "cook"}
                  >
                    <SelectTrigger tabIndex={8}>
                      <SelectValue placeholder="Select Position" />
                    </SelectTrigger>
                    <PositionOptions />
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    {...form.register("status")}
                    required
                    onValueChange={field.onChange}
                    defaultValue={field.value ? field.value : "active"}
                  >
                    <SelectTrigger tabIndex={9}>
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <StatusOptions />
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hireDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hired Date</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    {...form.register("hireDate")}
                    title="Hired Date"
                    type="date"
                    tabIndex={10}
                    placeholder="Enter Hired Date"
                    required
                    defaultValue={
                      field.value
                        ? field.value
                        : date
                          ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
                          : undefined
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="payRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pay Rate</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    {...form.register("payRate")}
                    title="Rate"
                    type="number"
                    step="0.01"
                    tabIndex={15}
                    placeholder="Enter Rate"
                    required
                    defaultValue={field.value ? field.value : 13.5}
                    className="grow-1 shrink-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="payType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pay Type</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    {...form.register("payType")}
                    required
                    onValueChange={field.onChange}
                    defaultValue={field.value ? field.value : "hourly"}
                  >
                    <SelectTrigger tabIndex={16}>
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <PayTypeOptions />
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormGroup>
        <Button
          type="submit"
          disabled={submitting}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit(form.getValues());
          }}
        >
          Add Employee
        </Button>
      </form>
    </Form>
  );
}
