import { ReviewForm } from "./review-form";

export default function ReviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-lg font-medium">Your Review</h1>
        <p className="text-sm text-muted-foreground"></p>
      </div>
      <ReviewForm />
    </div>
  );
}
