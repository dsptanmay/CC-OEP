import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGO_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cachedConnection: typeof mongoose | null = null;

export default async function dbConnect() {
  if (cachedConnection) {
    return cachedConnection;
  }

  const db = await mongoose.connect(MONGODB_URI);
  cachedConnection = db;
  return db;
}
