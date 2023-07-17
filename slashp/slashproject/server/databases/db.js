import mongoose from "mongoose";

const connection = () => {
  const MONGODB_URL = "mongodb://127.0.0.1:27017/todolist";
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("db connected successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("db disconneted");
  });
  mongoose.connection.on("error", () => {
    console.log("error", error.massage);
  });
};
export default connection;
