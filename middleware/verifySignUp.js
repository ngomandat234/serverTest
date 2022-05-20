const db = require("../models")
const role = db.ROLES
const User = db.user

const checkEmail = (req,res,next) => {
    User.findOne({
        email : req.body.email
    }).exec((err,data)=>{
        if(err) {
            res.status(500).json ({
                error : err
            })  
        }
        if (data)  {
            //console.log("Username ton tai " + data)
            res.status(400).json({
                message : "Username da ton tai " 
            })
            return
        }
        else {
            return next()

        }
        
    })
   
}
// const checkRolesExisted = (req, res, next) => {
//     if (req.body.roles) {
//       for (let i = 0; i < req.body.roles.length; i++) {
//         if (!role.includes(req.body.roles[i])) {
//           res.status(400).send({
//             message: `Failed! Role ${req.body.roles[i]} does not exist!`
//           });
//           return;
//         }
//       }
//     }
//     next();
//   };

module.exports = checkEmail