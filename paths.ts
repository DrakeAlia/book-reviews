const paths = {
  home() {
    return "/";
  },
  dashboardPath(dashboardId: string) {
    return `/dashboard/${dashboardId}`;
  },
  bookshelfPath(bookshelfId: string) {
    return `/bookshelf/${bookshelfId}`;
  },
  reviewPath() {
    return "/review";
  },
};

export default paths;
