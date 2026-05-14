import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

const satisfaction = {
  "Very dissatisfied": 1,
  Dissatisfied: 2,
  "Neither satisfied nor dissatisfied": 3,
  Satisfied: 4,
  "Very satisfied": 5,
};

const booleans = {
  Yes: 1,
  No: 0,
};

const questions = {
  osat: {
    title: "Overall satisfaction",
    description: "How satisfied are you with the overall experience?",
    type: "select",
    options: satisfaction,
  },
  speed: {
    title: "Speed",
    description: "How fast is the service?",
    type: "select",
    options: satisfaction,
  },
  accuracy: {
    title: "Accuracy",
    description: "How would you rate the accuracy of your order?",
    type: "select",
    options: satisfaction,
  },
  friendliness: {
    title: "Friendliness",
    description: "How friendly was the service?",
    type: "select",
    options: satisfaction,
  },
  cleanliness: {
    title: "Cleanliness",
    description: "How clean was the service?",
    type: "select",
    options: satisfaction,
  },
  temp: {
    title: "Tempurature of Food",
    description: "How satisfied were you with the tempurature of your food?",
    type: "select",
    options: satisfaction,
  },
  taste: {
    title: "Taste",
    description: "How satisfied were you with the taste of your food?",
    type: "select",
    options: satisfaction,
  },
  ready: {
    title: "Ready for pickup",
    description: "Was your food ready for pickup when you arrived?",
    type: "select",
    options: booleans,
  },
};

function Email(form: UseFormReturn) {
  return (
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
  );
}

function Code(form: UseFormReturn) {
  return (
    <FormField
      name="surveyCode"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Survey Code</FormLabel>
          <FormControl>
            <Input
              type="text"
              {...field}
              placeholder="Enter the survey code from your receipt"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function Choice(form: UseFormReturn, question: keyof typeof questions) {
  return (
    <FormField
      name={question}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{questions[question].title}</FormLabel>
          <FormDescription>{questions[question].description}</FormDescription>
          <FormControl>
            <RadioGroup {...field} {...form.register(question)}>
              {Object.entries(questions[question].options).map(
                ([key, value]) => (
                  <RadioGroupItem key={key} value={value.toString()}>
                    {key}
                  </RadioGroupItem>
                ),
              )}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function Comment(form: UseFormReturn) {
  return (
    <FormField
      name="comment"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Comment</FormLabel>
          <FormControl>
            <Textarea {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
export { Choice, Code, Comment, Email, questions };
