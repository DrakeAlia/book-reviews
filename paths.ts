const paths = {
  home() {
    return "/";
  },
  reviewShow(reviewSlug: string) {
    return `/review/${reviewSlug}`;
  },
  bookShelfShow() {
    return "/bookshelf";
  },
  // bookshelfShow(bookShelfSlug: string) {
  //   return `/bookShelf/${bookShelfSlug}`;
  // },
  dashboardShow(dashboardId: string) {
    return `/dashboard/${dashboardId}`;
  },
};

export default paths;
