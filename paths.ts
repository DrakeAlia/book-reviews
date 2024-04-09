const paths = {
  home() {
    return "/";
  },
  reviewShow(reviewSlug: string) {
    return `/review/${reviewSlug}`;
  },
  bookshelfShow(bookshelfSlug: string) {
    return `/bookshelf/${bookshelfSlug}`;
  },
  dashboardShow(dashboardId: string) {
    return `/dashboard/${dashboardId}`;
  },
};

export default paths;
