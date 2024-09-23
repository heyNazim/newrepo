import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        typeof: 'string'
        },
    email:{
        type:'string'
        },
    age:{
        type:'Number'
        }
},{timestamps:true})

const userModel = mongoose.model('User', userSchema);

export default userModel;