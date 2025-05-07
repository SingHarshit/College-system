import mongoose  from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection =  mongoose.connection;
        connection.on('connnected',()=>{
            console.log("Connected to MongoDB successfullly!");
        })
        connection.on('error', (err)=>{
            console.log("Error connecting to MongoDB"+err);
            process.exit();
        }  );
    }catch(error){
     console.log("Error connecting to MongoD");
    console.log(error);
        
    
    }
}