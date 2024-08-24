import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import UserRoutes from './routes/user_routes.js';
import Database from './Database/database.js';
import Allrouters from './Router/router.js';
import multer from 'multer';


const app = express()
app.use(express.json())
app.use(cors())
const port = 5555

Database()

 
app.listen(port, () => {
    console.log(`${port} is connected`)
})

app.get("/", (req, res) => {
    res.send("hiii")
})

// app.use("/user",UserRoutes)

app.use("/api", Allrouters)


//middleware
const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        return cb(null, "./uploads/")
    },
    filename: function(req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})
// Define the model
const ItemSchema = new mongoose.Schema({
    name: String,
    image: String
});

const Item = mongoose.model('Item', ItemSchema);

const upload = multer({ storage: storage })

app.post("/upload", upload.single("impfile"), async  (req, res) => {
    try {
        const name = req.body
        const image = req.file;

        const profile = await Item.create({name,image})
        res.json({
            success:true,
            data:profile
        })

    }
    catch (e) {
        console.log(e.Error)
    }
})