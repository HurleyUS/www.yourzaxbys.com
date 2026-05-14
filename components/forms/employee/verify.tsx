/**
 * Confirm user is signed in with clerk.
 * If not, redirect to login page, preserving the current URL in query params.
 * If signed in, check if current query params contain ?key=… with the value being a base64 encoded string of email+eid.
 * If so, decode the string and check if the email matches the current user's email.
 * Now have the user enter the last 4 digits of their SSN, their DOB and their email.
 * If they match, add the clerk user id value to the employee uid column in convex that matches their eid.
 * If they do, redirect to the onboarding page.
 * If they don't, redirect to the login page.
 */

"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { redirect, useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  ssnLast4 as ssnLast4Validator,
  dob as dobValidator,
  email as emailValidator,
} from "@/lib/employee";

export default function Verify() {
  const form = useForm({
    resolver: zodResolver(
      z.object({
        ssn: ssnLast4Validator,
        dob: dobValidator,
        email: emailValidator,
      }),
    ),
    defaultValues: {
      ssn: "",
      dob: "",
      email: "",
    },
    mode: "all",
  });

  const searchParams = useSearchParams();
  const key = searchParams.get("key");

  if (!key) {
    redirect(`${process.env.NEXT_PUBLIC_APP_URL}/login`);
  }

  const decodedKey = atob(key);
  const { email, eid } = JSON.parse(decodedKey);

  if (!email || !eid) {
    redirect(`${process.env.NEXT_PUBLIC_APP_URL}/login?error=Invalid key`);
  }

  const employee = useQuery(api.employees.getEmployeeByEid, {
    eid: eid,
  });

  const { isSignedIn, isLoaded, user } = useUser();

  // Show loading state while data is being fetched
  if (employee === undefined || !isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Only perform redirects after data is loaded
  if (!employee || employee.email !== email) {
    redirect(`${process.env.NEXT_PUBLIC_APP_URL}/login?error=Invalid key`);
  }

  if (!isSignedIn) {
    redirect(`${process.env.NEXT_PUBLIC_APP_URL}/login?key=${key}`);
  }

  if (user?.emailAddresses?.[0]?.emailAddress !== email) {
    redirect(`${process.env.NEXT_PUBLIC_APP_URL}/login`);
  }

  const updatedEmployee = useMutation(api.employees.updateEmployee);

  const onSubmit = async (data: {
    ssn?: string;
    dob?: string;
    email: string;
  }) => {
    const { ssn, dob, email } = data;

    // SECURITY: Compare last 4 digits only - full SSN is never stored
    if (
      ssn !== employee.ssnLast4 ||
      dob !== employee.dob ||
      email !== employee.email
    ) {
      redirect(
        `${process.env.NEXT_PUBLIC_APP_URL}/login?error=Invalid credentials`,
      );
    }

    await updatedEmployee({
      id: employee._id,
      clerkUserId: user.id,
    });

    redirect(`${process.env.NEXT_PUBLIC_APP_URL}/onboarding`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="ssn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last 4 of SSN</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel>DOB</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
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
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Verify</Button>
      </form>
    </Form>
  );
}
