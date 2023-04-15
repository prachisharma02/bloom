const mongoose = Require("mongoose");

const options = {
  bufferTimeoutMS: 30000, // set the bufferTimeoutMS to 30 seconds
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, (err) => {
      if (err) throw err;
      console.log("Connected to mongodb");
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
