export function splitUrlPathname(path: string) {
  console.log(path);

  if (!path) {
    return [];
  }

  if (path === "/") {
    return ["/"];
  }

  return path
    .split("/")
    .filter(Boolean)
    .map((segment) => "/" + segment);
}

// Test cases
// console.log(splitPath("/a/b/c/d")); // Output: ["/a", "/b", "/c", "/d"]
// console.log(splitPath("/")); // Output: ["/"]
