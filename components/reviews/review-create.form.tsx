"use client";

import * as actions from "@/app/actions";
import FormButton from "@/common/form-button";
import { useFormState } from "react-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  useFormField,
} from "@/components/ui/form";

export default function ReviewCreateForm() {
  const [formState, action] = useFormState(actions.createReview, {
    errors: {},
  });

  return (
    <form action={action}>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="genre">Genre</Label>
          <Select name="genre">
            <SelectTrigger>
              <SelectValue placeholder="Select the book's genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fiction">Fiction</SelectItem>
              <SelectItem value="non-fiction">Non-Fiction</SelectItem>
              <SelectItem value="science-fiction">Science Fiction</SelectItem>
              <SelectItem value="biography">Biography</SelectItem>
              <SelectItem value="mystery">Mystery</SelectItem>
              <SelectItem value="thriller">Thriller</SelectItem>
              <SelectItem value="fantasy">Fantasy</SelectItem>
              <SelectItem value="horror">Horror</SelectItem>
              <SelectItem value="romance">Romance</SelectItem>
              <SelectItem value="poetry">Poetry</SelectItem>
              <SelectItem value="history">History</SelectItem>
              <SelectItem value="historical fiction">
                Historical Fiction
              </SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="novel">Novel</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-red-500">
            {formState.errors.genre?.join(", ")}
          </span>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="Title of the book" />
          <span className="text-red-500">
            {formState.errors.title?.join(", ")}
          </span>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" placeholder="Author name" />
          <span className="text-red-500">
            {formState.errors.author?.join(", ")}
          </span>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Review</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Add your review here"
          />
          <span className="text-red-500">
            {formState.errors.description?.join(", ")}
          </span>
        </div>
        <div className="text-red-500">{formState.errors._form?.join(", ")}</div>
      </div>
      <FormButton>Create Review</FormButton>
    </form>
  );
}

// const profileFormSchema = z.object({
//   title: z
//     .string()
//     .min(2, {
//       message: "Book's title must be at least 2 characters.",
//     })
//     .max(30, {
//       message: "Book's title must not be longer than 30 characters.",
//     }),
//   author: z
//     .string()
//     .min(2, {
//       message: "Author must be at least 2 characters.",
//     })
//     .max(30, {
//       message: "Author name must not be longer than 30 characters.",
//     }),
//   genre: z.string({
//     required_error: "Please select an genre to display.",
//   }),
//   description: z
//     .string()
//     .min(10, {
//       message: "Review must be at least 10 characters.",
//     })
//     .max(500, {
//       message: "Review must not be longer than 500 characters.",
//     }),
// });

// type ProfileFormValues = z.infer<typeof profileFormSchema>;

// export default function ReviewCreateForm() {
//   const form = useForm<ProfileFormValues>({
//     resolver: zodResolver(profileFormSchema),
//     mode: "onChange",
//   });

//   function onSubmit(data: ProfileFormValues) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-9">
//         <FormField
//           control={form.control}
//           name="title"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Book&apos;s Title</FormLabel>
//               <FormControl>
//                 <Input placeholder="Name of the book" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is the name of the book you are reviewing.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="author"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Book&apos;s Author</FormLabel>
//               <FormControl>
//                 <Input placeholder="Author's name" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is the name of the author of the book you are reviewing.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="genre"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Genre</FormLabel>
//               <Select onValueChange={field.onChange} defaultValue={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select the book's genre" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   <SelectItem value="fiction">Fiction</SelectItem>
//                   <SelectItem value="science-fiction">
//                     Science Fiction
//                   </SelectItem>
//                   <SelectItem value="nonfiction">Non-Fiction</SelectItem>
//                   <SelectItem value="fantasy">Fantasy</SelectItem>
//                   <SelectItem value="horror">Horror</SelectItem>
//                   <SelectItem value="mystery">Mystery</SelectItem>
//                   <SelectItem value="thriller">Thriller</SelectItem>
//                   <SelectItem value="romance">Romance</SelectItem>
//                   <SelectItem value="poetry">Poetry</SelectItem>
//                   <SelectItem value="biography">Biography</SelectItem>
//                   <SelectItem value="autobiography">Autobiography</SelectItem>
//                   <SelectItem value="history">History</SelectItem>
//                   <SelectItem value="science">Science</SelectItem>
//                   <SelectItem value="novel">Novel</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="description"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Description</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Write a description of the book here."
//                   className="resize-none"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div>
//           <FormButton>Submit</FormButton>
//         </div>
//       </form>
//     </Form>
//   );
// }
