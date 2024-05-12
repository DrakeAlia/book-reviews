const paths = {
  home() {
    return "/";
  },
  createBook() {
    return "/book"; // Path to the page/form where a new book can be added
  },
  createReview(bookId: string) {
    return `/bookshelf/books/${bookId}/reviews`; // Path to the page/form where a new review can be added for a specific book
  },
  bookShelfShow() {
    return "/bookshelf"; // General path to the bookshelf
  },
  bookShow(bookId: string) {
    return `/bookshelf/books/${bookId}`; // Path to a specific book
  },
  reviewShow(bookId: string, reviewId: string) {
    return `/bookshelf/books/${bookId}/reviews/${reviewId}`; // Path to a specific review
  },
};

export default paths;
