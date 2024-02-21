dotenv.config();
import dotenv from "dotenv";
import express from "express";
import { redirectUrl, urlShorter } from "./services/urlShorter.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/url-shorted", urlShorter);
app.use("/:url", redirectUrl);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

export default app;
