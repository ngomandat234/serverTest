const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
var io = require("socket.io")(server)
var fs = require('fs');
const user = require('./routers/user')
const aa = "sdsdd"
const authUser = require('./routers/auth')
//const authUser = require('./routers/auth')(aa)
const path = require("path")
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT ||  3001
const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/testdb'
// const options = {
//   key: fs.readFileSync("/"),
//   cert: fs.readFileSync('C:/Users/lemin/cert.pem')
// }; 
// var server = require("https").Server(options,app)
var server = require("http").Server(app)
mongoose
.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("Connect to db")
    //InitRole()
    server.listen(PORT,()=>{
        console.log(`Server is listening on port ${PORT}`)
    })
}).catch((err) => {
    console.log(err)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true, limit:"30mb" }))
//app.use(cors())
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
}));
app.use('/user',user)
app.use('/auth',authUser)
app.use(cookieParser())
// app.engine('hbs', handlebars({
//     extname : '.hbs',
//     helpers: {
//         sum: (a,b) => a+b
//     }
// }));
app.use('/',express.static(path.join(__dirname, 'public')));
app.use('/user',express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
const db = require("./models");
const Role = db.roleUser;
// function InitRole() {
//     Role.estimatedDocumentCount((err, count) => {
//       if (!err && count === 0) {
//         new Role({
//           name: "user"
//         }).save(err => {
//           if (err) {
//             console.log("error", err);
//           }
//           console.log("added 'user' to roles collection");
//         });
//         new Role({
//           name: "admin"
//         }).save(err => {
//           if (err) {
//             console.log("error", err);
//           }
//           console.log("added 'admin' to roles collection");
//         });
//       }
//     });
//   }

// server stream
// const NodeMediaServer = require('node-media-server');
// const config = {
//   logType: 3,
//   rtmp: {
//     port: 1935,
//     // chunk_size: 60000,
//     chung_size:4096,
//     //gop_cache: true,
//     gop_cache: false,
//     //ping: 30,
//     ping: 1,
//     ping_timeout: 1
//     //ping_timeout: 60
//   },
//   http: {
//     port: 3000,
//     mediaroot: './media',
//     allow_origin: '*',
//     api: true,
//     webroot: './www',
//   },
//   trans: {
//     ffmpeg: 'C:/ProgramData/chocolatey/bin/ffmpeg.exe',
//     tasks: [
//       {
//         app: 'live',
//         mp4: true,
//         mp4Flags: '[movflags=frag_keyframe+empty_moov]',
//       }
//     ]
//   }
// };

// var nms = new NodeMediaServer(config)
// nms.run()


// nms.on('preConnect', (id, args) => {
//     console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
//     // let session = nms.getSession(id);
//     // session.reject();
//     // const file = fs.createWriteStream("video.mp4");
//     // const request = http.get('http://localhost:3000/live/STREAM_NAME.flv', function(response) {
//     //    response.pipe(file);
//     //    // after download completed close filestream
//     //    file.on("finish", () => {
//     //        file.close();
//     //        console.log("Download Completed");
//     //    });
//     // });
//   });
  
//   nms.on('postConnect', (id, args) => {
//     console.log('[NodeEvent on postConnect1]', `id=${id} args=${JSON.stringify(args)}`);
    
//   });
  
//   nms.on('doneConnect', (id, args) => {
//     console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
   
//   });
  
//   nms.on('prePublish', (id, StreamPath, args) => {
//     console.log('[NodeEvent on prePublish2]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//     // let session = nms.getSession(id);
//     // session.reject();
//   });
  
//   nms.on('postPublish', (id, StreamPath, args) => {
//     console.log('[NodeEvent on postPublish3]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//     // setInterval(function(){
     
//     //   console.log("sau 15 ne")
//     // }, 15000);
    
//   nms.on('donePublish', (id, StreamPath, args) => {
//     console.log('[NodeEvent on donePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//   });
  
//   nms.on('prePlay', (id, StreamPath, args) => {
//     console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//     // let session = nms.getSession(id);
//     // session.reject();
//   });
  
//   nms.on('postPlay', (id, StreamPath, args) => {
//     console.log('[NodeEvent on postPlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
    
//   });
  
//   nms.on('donePlay', (id, StreamPath, args) => {
//     console.log('[NodeEvent on donePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//   });
// })