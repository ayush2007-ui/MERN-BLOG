import  mongoose from 'mongoose';
const DB_Name="MERN-BLOG";

const connectDB = async() => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log("MongoDB connected succesfully");
        
    } catch (error) 
    {
       console.log("MongoDb error",error);
    }
}
export default connectDB;