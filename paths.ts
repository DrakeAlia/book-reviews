const paths = {
  homePath() {
    return "/";
  },
  signInPath() {
    return "/sign-in";
  },
  signUpPath() {
    return "/sign-up";
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
