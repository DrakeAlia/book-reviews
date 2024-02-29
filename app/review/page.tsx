import { Separator } from "@/components/ui/separator";
import { ReviewForm } from "./review-form";

export default function ReviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-medium">Create Review</h1>
        <p className="text-sm text-muted-foreground">
        </p>
      </div>
      <Separator />
      <ReviewForm />
    </div>
  );
}
