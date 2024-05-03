"use client";

import * as actions from "@/app/actions";
import FormButton from "@/common/form-button";
import { useFormState } from "react-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function BookCreateForm() {
  const [formState, action] = useFormState(actions.createBook, {
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
        <div className="text-red-500">{formState.errors._form?.join(", ")}</div>
      </div>
      <FormButton>Create Book</FormButton>
    </form>
  );
}
