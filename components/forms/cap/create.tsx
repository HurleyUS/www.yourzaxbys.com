"use client";
import * as Sentry from "@sentry/nextjs";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";

const capSchema = z.object({
  type: z.enum(["fs", "rer"], { message: "Please select a CAP type" }),
  score: z.number().min(0).max(100, "Score must be between 0 and 100"),
  inspector: z.string().min(1, "Inspector name is required"),
  mod: z.string().min(1, "MOD is required"),
  date: z.number().min(1, "Date is required"),
  responses: z
    .array(
      z.object({
        observation: z.string().min(1, "Observation is required"),
        solution: z.string().min(1, "Solution is required"),
        plan: z.string().min(1, "Plan is required"),
      }),
    )
    .min(1, "At least one response is required"),
});

type CapFormData = z.infer<typeof capSchema>;

export default function CreateCapForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createCap = useMutation(api.caps.createCap);

  const form = useForm<CapFormData>({
    resolver: zodResolver(capSchema),
    defaultValues: {
      type: undefined,
      score: 0,
      inspector: "",
      mod: "",
      date: Date.now(),
      responses: [
        {
          observation: "",
          solution: "",
          plan: "",
        },
      ],
    },
  });
  // The original code is incorrect: useForm does not return fields, append, or remove.
  // To manage dynamic fields in react-hook-form, use useFieldArray instead.

  const { append, remove } = useFieldArray({
    control: form.control,
    name: "responses",
  });

  const onSubmit = async (data: CapFormData) => {
    setIsSubmitting(true);
    try {
      await createCap(data);
      form.reset();
      // You might want to redirect or show a success message here
    } catch (error) {
      Sentry.captureException(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const addResponse = () => {
    append({
      observation: "",
      solution: "",
      plan: "",
    });
  };

  const removeResponse = (index: number) => {
    remove(index);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Corrective Action Plan</CardTitle>
        <CardDescription>
          Create a new CAP (Corrective Action Plan) for FS or RER inspections.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CAP Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select CAP type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fs">FS (Food Safety)</SelectItem>
                        <SelectItem value="rer">
                          RER (Restaurant Excellence Review)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="score"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Score</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="inspector"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inspector</FormLabel>
                    <FormControl>
                      <Input placeholder="Inspector name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>MOD (Manager on Duty)</FormLabel>
                    <FormControl>
                      <Input placeholder="MOD name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        onChange={(e) =>
                          field.onChange(new Date(e.target.value).getTime())
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Responses</h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addResponse}
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add Response
                </Button>
              </div>

              {form.watch("responses").map((_, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Response {index + 1}</h4>
                      {form.watch("responses").length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeResponse(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name={`responses.${index}.observation`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Observation</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the observation..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`responses.${index}.solution`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Solution</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the solution..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`responses.${index}.plan`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Plan</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the plan..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create CAP"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
