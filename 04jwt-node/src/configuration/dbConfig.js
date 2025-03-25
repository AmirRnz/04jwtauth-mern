import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/04jwt-node");

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});
mongoose.connection.on("error", (error) => {
  console.log(`mongodb connection error ${error}`);
});

export default mongoose;
