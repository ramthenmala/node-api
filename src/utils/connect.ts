import mongoose from "mongoose";
import config from "config";
import log from "./logger";

const dbConnect = async () => {
  const dbUri = config.get<string>("dbConfig.mongoConnect");

  try {
    await mongoose.set("strictQuery", false);
    const connectMDB = await mongoose.connect(dbUri);
    log.info("Connection successful");
    return connectMDB;
  } catch (error) {
    console.log("error", error);
    log.error(error);
    process.exit(1);
  }
};

export default dbConnect;
