import mongoose from "mongoose";

const db_connection = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/mongotest")
    .then(() => console.log(" db connected"))
    .catch(() => console.log("failed connected"));
};

export default db_connection;
