const User = require('../models/User');
const Post = require('../models/Post');

module.exports.create = async function(req,res){
    try{
        const newPost = await Post.create(req.body);
        res.status(200).json(newPost);
    }
    catch(err){
        console.log("Error occured in Updating", err);
        res.status(500).json(err);
    }
}

module.exports.update = async function(req,res){
    try{
        const post = await Post.findById(req.params.id);
        if(post && post.username === req.body.username){
            const updatedPost = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updatedPost);

        }else{
            res.status(404).json("You can update only your post");
        }

    }
    catch(err){
        console.log("Error occured in Updating", err);
        res.status(500).json(err);
    }
    
}

module.exports.delete = async function(req,res){
    try{
        const post = await Post.findById(req.params.id);
        if(!post){
            res.status(404).json("Post Not found");
        }
        
        if(post.username === req.body.username){
           await Post.findByIdAndDelete(req.params.id);
            res.status(200).json("Post Deleted");

        }else{
            res.status(404).json("You can update only your post");
        }

    }
    catch(err){
        console.log("Error occured in Delete", err);
        res.status(500).json(err);
    }
}

module.exports.get = async function(req,res){
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err){
        console.log("Error occured in finding one post", err);
        res.status(500).json(err);
    }
}

module.exports.getAll = async function(req,res){
    try{
        const username = req.query.user;
        const category = req.query.category;
        let posts;

       if(username){
        posts = await Post.find({username:username});
       }
       else if(category){
        posts = await Post.find({categories:{$in:[category]}});
       }
       else{
        posts = await Post.find();
       }

       req.status(200).json(posts);
    }
    catch(err){
        console.log("Error occured in finding one post", err);
        res.status(500).json(err);
    }
}


