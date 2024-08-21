import mongoose from "mongoose"


const Database =async ()=>{
    try{

   const DB= await mongoose.connect("mongodb+srv://shivkumarloharkar:Tny9dZwuwEYHTE9t@cluster0.efn3se0.mongodb.net/Tailor_project")
   console.log(`MongoDB Connected successfully`);
    }
    catch(e){
        console.log(e)
    }
}

export default Database;
