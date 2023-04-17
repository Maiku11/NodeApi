import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "backendapi"
    }).then((c) => {
        console.log("connected");
    }).catch((err) => {
        console.log("error maiku");
    })
}