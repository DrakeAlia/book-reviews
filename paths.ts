const paths = {
  home() {
    return "/";
  },
  bookShelfShow() {
    return "/bookshelf";
  },
  bookShow(bookId: string) {
    return `/bookshelf/books/${bookId}`;
  },
};

export default paths;
