// const paths = {
//   home() {
//     return "/";
//   },
//   bookShelfShow() {
//     return "/bookshelf";
//   },
//   bookShow(bookId: string) {
//     return `/bookshelf/books/${bookId}`;
//   },
// };

// export default paths;

const paths = {
  home() {
    return "/";
  },
  bookShelfShow() {
    return "/bookshelf"; // General path to the bookshelf
  },
  bookShow(bookId: string) {
    return `/bookshelf/books/${bookId}`; // Path to a specific book
  },
  createBook() {
    return "/bookshelf/create"; // Path to the page/form where a new book can be created
  },
  reviewShow(bookId: string, reviewId: string) {
    return `/bookshelf/books/${bookId}/reviews/${reviewId}`; // Path to a specific review
  },
  createReview(bookId: string) {
    return `/bookshelf/books/${bookId}/reviews/create`; // Path to the page/form where a new review can be added for a specific book
  },
};

export default paths;
