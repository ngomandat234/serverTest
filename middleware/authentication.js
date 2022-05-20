const jwt = require('jsonwebtoken')
const express = require("express");
const db = require("../models")
const user = db.user
const cookieParser = require("cookie-parser");
//const { user } = require('../models');
const app = express();
app.use(cookieParser());

const authenticate = async(req,res,next) => {
//     try {
//     const token = req.headers.authorization.split(' ')[1]
//     const decode = jwt.verify(token,"ManDatDepTry")   
//     //req.body = decode
//     req.userID = decode.id
//     //var userID = decode.id
//     res.cookie("access-token", token, { maxAge: 86400000 ,httpOnly:true});
//     //res.cookie("user-data", JSON.stringify(token), { maxAge: 86400000 ,httpOnly:true});
//     next()
// }
const token = req.cookies.token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, "ManDatDepTry");
    const userLogin = await user.findOne({'_id':data._id, "token" : token})
    req.user= userLogin
    return next();
  }
    catch(err){
        if (err.name == "TokenExpiredError"){
            res.status(401).json({message:"Token expired"})
        }
        else
            res.status(500).json({message:"Authentication failed"})
    }
}

module.exports= authenticate
