const express = require('express');
const app = express();
const db=require('./config/mongoose');
const router = require("./routes");
const multer = require('multer');
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname,"/uploads/images")));
// app.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Methods", ['GET','POST','PUT','DELETE']);
//     res.header("Access-Control-Allow-Header", 'Origin, X-Requested-With, Content-Type, Accept,  Accept-Language, Content-Language');
//     next();
// })

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/images")
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    },
});

const upload = multer({storage:storage});

app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
});


app.use("/api",router);

app.listen("5000", ()=>{
    console.log("Server is started at port : 5000");
})