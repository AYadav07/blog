const Category = require('../models/Category');

module.exports.create = async function(req,res){
    try{
       const newCat = await Category.create(req.body);
        res.status(200).json(newCat);
    }
    catch(err){
        console.log("Error occured in creating category", err);
        res.status(500).json(err);
    }
}

module.exports.getAll = async function(req,res){
    try{
        
        const cats = await Category.find();
       res.status(200).json(cats);
    }
    catch(err){
        console.log("Error occured in finding Category", err);
        res.status(500).json(err);
    }
}


