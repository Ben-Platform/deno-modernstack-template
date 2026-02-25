import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

// API: endpoints
app.get("/api/data", (c) => c.json({ status: "success" }));
app.get("/api/hello", (c) => c.json({ message: "Hello from Hono!" }));


app.use("/dist/*", serveStatic({ root: "./" }));
app.use("/assets/*", serveStatic({ root: "./dist" }));

// Vite-aware
const isProd = !!Deno.env.get("DENO_DEPLOYMENT_ID") || Deno.args.includes("--preview");

const path = isProd ? "./dist/index.html" : "./index.html";
app.get("/", serveStatic({ path: path }));

// For Deno
if (import.meta.main) {
  Deno.serve(app.fetch);
}

// For Vite
// The dev-server plugin looks for this default export
export default app;