import { superoak } from "https://deno.land/x/superoak@4.2.0/mod.ts";
import { delay } from "https://deno.land/x/delay@v0.2.0/mod.ts";
import app from "./server.ts";

Deno.test(
  "it should return a JSON response containing questions with status code 200",
  async () => {
    const request = await superoak(app);
    await request
      .get("/")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(/"questions":/);
  }
);

// Forcefully exit the Deno process once all tests are done.
Deno.test({
  name: "exit the process forcefully after all the tests are done\n",
  async fn() {
    await delay(3000);
    Deno.exit(0);
  },
  sanitizeExit: false,
});
