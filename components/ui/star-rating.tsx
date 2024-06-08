"use client";

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  const handleClick = (index: number) => {
    onRatingChange(index + 1);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`h-6 w-6 cursor-pointer ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleClick(index)}
        >
          <path d="M10 1l2.6 5.9H20l-4.9 4.3 1.8 6.3-5.7-3.9-5.7 3.9 1.8-6.3L0 6.9h7.4L10 1z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
