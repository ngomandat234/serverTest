const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("./userModel");
//db.roleUser = require("./roleUserModel");
//db.ROLES = ["user", "admin"];
module.exports = db;