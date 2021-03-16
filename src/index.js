
//Load HTTP module
const app = require("express")();
var server  = app.listen(1337);

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});


// Importar rutas 
const api = require('./api/api');

// Inicializar rutas
app.use('/api', api);


app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

//Create HTTP server and listen on port 1337 for requests
app.listen(() => {
  console.log(`Server running at `);
});

/**
 * WebSockets as WSS Server
 */
 const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost",
    methods: ["GET", "POST"]
  }
});

/**
 * WSS Events from client-side
 */
io.on("connection", socket => { 
  console.log(`${socket.id} has connected`);
});

module.exports = app;