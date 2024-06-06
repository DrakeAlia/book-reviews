// // Rating.tsx
// import React, { useState } from "react";
// import * as Slot from "@radix-ui/react-slot";
// import { SlotProps } from "@radix-ui/react-slot";

// interface RatingProps {
//   value?: number;
//   readonly?: boolean;
//   onChange?: (rating: number) => void;
// }

// export default function Rating({
//   value = 0,
//   readonly = false,
//   onChange,
// }: RatingProps) {
//   const [rating, setRating] = useState(value);
//   const [hoverRating, setHoverRating] = useState(0);

//   const handleClick = (selectedRating: number) => {
//     if (readonly) return;
//     setRating(selectedRating);
//     onChange?.(selectedRating);
//   };

//   const handleMouseEnter = (selectedRating: number) => {
//     if (readonly) return;
//     setHoverRating(selectedRating);
//   };

//   const handleMouseLeave = () => {
//     if (readonly) return;
//     setHoverRating(0);
//   };

//   return (
//     <div className="flex" role="radiogroup">
//       {[...Array(5)].map((_, index) => {
//         const starRating = index + 1;
//         const isSelected = starRating <= (hoverRating || rating);

//         return (
//           <Slot.Slot key={starRating}>
//             {({ className, ...props }: SlotProps) => (
//               <button
//                 {...props}
//                 type="button"
//                 className={`
//                   ${isSelected ? "text-yellow-400" : "text-gray-300"}
//                   h-8 w-8 flex items-center justify-center ${className}
//                 `}
//                 onClick={() => handleClick(starRating)}
//                 onMouseEnter={() => handleMouseEnter(starRating)}
//                 onMouseLeave={handleMouseLeave}
//                 disabled={readonly}
//                 aria-checked={isSelected}
//                 role="radio"
//               >
//                 <span className="sr-only">
//                   {starRating} star{starRating !== 1 && "s"}
//                 </span>
//                 <Star className="h-6 w-6 fill-current" />
//               </button>
//             )}
//           </Slot.Slot>
//         );
//       })}
//     </div>
//   );
// }
