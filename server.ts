import { Application, Router } from "https://deno.land/x/oak@v7.5.0/mod.ts";
import questions from "./questions.ts";

const app = new Application();
const port = 8000;
const router = new Router();

router.get("/", (context) => {
  context.response.type = "application/json";
  context.response.body = { questions };
});

app.addEventListener("error", (event) => {
  console.error(event.error);
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port });

console.log(`Server is running on port ${port}`);

export default app;
