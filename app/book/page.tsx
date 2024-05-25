import BookCreateForm from "@/components/books/book-create-form";

export default function BookPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">
         What book did you read?
        </h1>
        <p className="text-sm text-muted-foreground"></p>
      </div>
      <BookCreateForm />
    </div>
  );
}
