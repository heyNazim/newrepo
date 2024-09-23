import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        const conn = await mongoose.connect('mongodb+srv://nazim:Nazim1908@nazim-crud.jvsy7bg.mongodb.net/MOM-SHOP?retryWrites=true&w=majority&appName=nazim-crud')
        if(conn){
            console.log(`Database connected: ${conn.connection.host}`)
        }
    } catch (error) {
        console.log(`Something went wrong in database ${error}`)
    }
}

export default connectDb;