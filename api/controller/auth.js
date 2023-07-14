const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports.register = async function(req,res){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
        const newUser= await User.create({username:req.body.username, email:req.body.email, password:hashedPass});
        res.status(200).json({"user" : newUser});

    }
    catch(err){
        console.log("Error occured in registering", err);
        res.status(500).json(err);
    }
    
}

module.exports.login = async function(req,res){
    try{
        const user = await User.findOne({username:req.body.username});
        if(!user){
            res.status(400).json({"message":"Wrong credentials"});
        }
        const validated = await bcrypt.compare(req.body.password,user.password);
        if(!validated){
            res.status(400).json({"message":"Wrong credentials"});
        }
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }
    catch(err){
        console.log("Error occured in logging", err);
        res.status(500).json(err);
    }
}
