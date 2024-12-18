import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI environment variable is not defined.");
  }

  try {
    const client = await MongoClient.connect(mongoUri);
    console.log("Connected db");
    return client;
  } catch (error) {
    console.log("Not Connected db");
  }
};
