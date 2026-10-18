const modules = import.meta.glob("../assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export function asset(name) {
  const exact = modules[`../assets/${name}`];
  if (exact) return exact;

  const key = Object.keys(modules).find(
    (path) => path.split("/").pop().toLowerCase() === name.toLowerCase()
  );

  if (key) return modules[key];

  console.error(`Portfolio asset not found: ${name}`);
  return "";
}
