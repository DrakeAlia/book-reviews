const paths = {
  home() {
    return "/";
  },
  bookShelfShowPath() {
    return "/bookshelf"; // General path to the bookshelf which lists all books created by users
  },
  createBookPath() {
    return "/book"; // Path to the page/form where a new book can be added
  },
  bookShowPath(bookId: string) {
    return `/bookshelf/books/${bookId}`; // Path to a specific book
  },
  createReviewPath(bookId: string) {
    return `/bookshelf/books/${bookId}/review`; // Path to the page/form where a new review can be added for a specific book
  },
  // reviewShowPath(bookId: string, reviewId: string) {
  //   return `/bookshelf/books/${bookId}/reviews/${reviewId}`; // Path to a specific review
  // },
};

export default paths;
