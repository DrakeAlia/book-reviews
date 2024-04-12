import ReviewForm  from "../../components/reviews/review-form";
import ReviewCreateForm from "../../components/reviews/review-create.form";

export default function ReviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Your Review</h1>
        <p className="text-sm text-muted-foreground"></p>
      </div>
      {/* <ReviewForm /> */}
      <ReviewCreateForm />
    </div>
  );
}
