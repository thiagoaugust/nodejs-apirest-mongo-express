import "dotenv/config";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);
// eslint-disable-next-line no-undef
mongoose.connect(process.env.DB_CONNECTION_STRING);

let db = mongoose.connection;

export default db;
