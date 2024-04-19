const paths = {
  home() {
    return "/";
  },
  bookShelfShow() {
    return "/bookshelf";
  },
  bookShow(bookSlug: string) {
    return `/bookshelf/${bookSlug}`;
  }
};

export default paths;
