const User = require('../models/User');
const bcrypt = require('bcrypt');
const Post = require('../models/Post');

module.exports.update = async function(req,res){
    try{
        if(req.body.userId === req.params.id){
            if(req.body.password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt);
            }
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updatedUser);
        }
        else{
            res.status(401).json({"message":"You can only update tour account"});
        }

    }
    catch(err){
        console.log("Error occured in Updating", err);
        res.status(500).json(err);
    }
    
}

module.exports.delete = async function(req,res){
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            res.status(404).json("User not found");
        }
        if(req.body.userId === req.params.id){
            await Post.deleteMany({username:user.username});
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted");
        }
        else{
            res.status(401).json({"message":"You can only delete tour account"});
        }

    }
    catch(err){
        console.log("Error occured in Delete", err);
        res.status(500).json(err);
    }
}

module.exports.get = async function(req,res){
    try{
        const user = await User.findById(req.params.id,{password:0});
        res.status(200).json(user);
    }
    catch(err){
        console.log("Error occured in finding one User", err);
        res.status(500).json(err);
    }
}
