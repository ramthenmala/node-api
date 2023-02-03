import express from "express";
import config from "config";
import dbConnect from "./utils/connect";

const app = express();
const PORT = config.get<number>("dbConfig.port");

app.listen(PORT, async () => {
  await dbConnect();
});
