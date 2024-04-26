const paths = {
  home() {
    return "/";
  },
  bookShelfShow() {
    return "/bookshelf";
  },
  bookShow(bookId: string) {
    return `/bookshelf/${bookId}`;
  },
};

export default paths;
