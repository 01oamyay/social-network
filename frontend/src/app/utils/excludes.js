const layoutExclude = (path) => {
  const excludedNav = [
    "/login",
    "/register",
    "/forgot-password",
    "/profile/setup",
  ];
  return excludedNav.includes(path);
};

export default { layoutExclude };
