import mongoose, { mongo } from "mongoose"


const connectDb = async() =>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo db is connects : ${conn.connection.host}`);

    }catch(err){
        console.log(`Error: ${err.message}`)
        process.exit(1);
    }
};


export default connectDb;