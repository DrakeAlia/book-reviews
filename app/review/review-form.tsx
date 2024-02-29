"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form";
import { Ratings } from "./rating";

const profileFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Book's title must be at least 2 characters.",
    })
    .max(30, {
      message: "Book's title must not be longer than 30 characters.",
    }),
  author: z
    .string()
    .min(2, {
      message: "Author must be at least 2 characters.",
    })
    .max(30, {
      message: "Author name must not be longer than 30 characters.",
    }),
  genre: z
    .string({
      required_error: "Please select an genre to display.",
    })
    .min(2, {
      message: "Genre must be at least 2 characters.",
    })
    .max(30, {
      message: "You must select a genre",
    }),
  review: z.string().max(160).min(4),
  rating: z.number().int().min(1).max(5),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  //   bio: "I own a computer.",
  //   urls: [
  //     { value: "https://shadcn.com" },
  //     { value: "http://twitter.com/shadcn" },
  //   ],
};

export function ReviewForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    // defaultValues,
    mode: "onChange",
  });

  // const { fields, append } = useFieldArray({
  //   name: "urls",
  //   control: form.control,
  // });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-9">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book&apos;s Title</FormLabel>
              <FormControl>
                <Input placeholder="Name of the book" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of the book you are reviewing.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book&apos;s Author</FormLabel>
              <FormControl>
                <Input placeholder="Author's name" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of the author of the book you are reviewing.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the book's genre" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="fiction">Fiction</SelectItem>
                  <SelectItem value="science-fiction">
                    Science Fiction
                  </SelectItem>
                  <SelectItem value="nonfiction">Non-Fiction</SelectItem>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="horror">Horror</SelectItem>
                  <SelectItem value="mystery">Mystery</SelectItem>
                  <SelectItem value="thriller">Thriller</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="poetry">Poetry</SelectItem>
                  <SelectItem value="biography">Biography</SelectItem>
                  <SelectItem value="autobiography">Autobiography</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="novel">Novel</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a review of the book here."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <Ratings rating={3} variant="yellow" totalStars={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit Review</Button>
      </form>
    </Form>
  );
}
