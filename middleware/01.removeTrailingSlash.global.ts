export default defineNuxtRouteMiddleware((to, from) => {
  const hashTrailingSlash = to.path !== "/" && to.path.endsWith("/");

  console.log("to", to);
  console.log("from", from);

  if (hashTrailingSlash) {
    const newPath = to.path.slice(0, -1);

    return navigateTo({ path: newPath, query: to.query, hash: to.hash });
  }
});
