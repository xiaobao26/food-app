export function getBasePath(path: string) {
  if (!path) {
    return null;
  }

  if (path === "/") {
    return path;
  }

  return path
    .split("/")
    .filter(Boolean)
    .map((segment) => "/" + segment)[0];
}

// Test cases
// console.log(splitPath("/a/b/c/d")); // Output: ["/a", "/b", "/c", "/d"]
// console.log(splitPath("/")); // Output: ["/"]
