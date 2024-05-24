import ReviewCreateForm from "../../../../../components/reviews/review-create-form";

interface ReviewPageProps {
  params: {
    bookId: string;
  };
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const { bookId } = params;
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">What did you think of this book?</h1>
        <p className="text-sm text-muted-foreground"></p>
      </div>
      <ReviewCreateForm />
    </div>
  );
}
