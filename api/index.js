const express = require('express');
const app = express();
const db=require('./config/mongoose');
const router = require("./routes");
const multer = require('multer');

app.use(express.json());

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
})

app.use("/api",router);

app.listen("5000", ()=>{
    console.log("Server is started at port : 5000");
})