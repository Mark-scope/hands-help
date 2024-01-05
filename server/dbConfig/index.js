import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        //Database Connection
        const connection = mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connected Successfully");
    } catch (err) {
        console.log("DB ERROR" + err)
    }
}

export default dbConnection;
