// const express = require("express");
// const debug = require("debug")("server");

// const app = express();
// const port = process.env.SERVER_PORT || 3000;

// // NEW - Add CORS headers - see https://enable-cors.org/server_expressjs.html
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// //commenting out __dirname variable
// // __dirname
// // /Users/jemyishai/projects/benjTicTacToe/server

// // let static = __dirname +
// app.use(express.static('/Users/jemyishai/projects/benjTicTacToe/public/'));


// // API endpoint
// app.get("/", (req, res) => {
//   console.log(__dirname)
//   // app.get("/", function(req, res) {
//     // let absolutePath = __dirname + "/public/index.html";
//      res.sendFile('/Users/jemyishai/projects/benjTicTacToe/public/index.html');
//   // });
//   // res.send({
//   //   msg: "Hello, World"
//   // });
// });

// app.listen(port, () => debug(`Listening on port ${port}`));
