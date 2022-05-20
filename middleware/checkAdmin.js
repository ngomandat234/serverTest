const db = require("../models")
const User = db.user
// const Role = db.ROLES
const isAdmin = (req, res, next) => {
        User.findOne({email : req.body.email}).exec((err,data) => {
          if(err)
          {
            res.status(500).json({message: err})
          }
          if (data.role === "user")
          {
            res.status(400).json({
                message : "yeu cau admin" 
            })
          
          }
          else next()
      }
      )
      
    // }); 
  
 };
 module.exports= isAdmin