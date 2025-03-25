import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/04jwt-node");

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});
mongoose.connection.on("error", (error) => {
  console.log(`mongodb connection error ${error}`);
});

export default mongoose;
