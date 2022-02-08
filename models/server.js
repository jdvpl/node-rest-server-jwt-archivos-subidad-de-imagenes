const express = require('express');
const cors = require('cors');
class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usuariosRuta='/api/users';
    // middleware: son funcionalidads para el webserver
    this.middlewares();
    // rutas de mi app
    this.routes();
  }

  routes() {
    this.app.use(this.usuariosRuta, require('../routes/user.routes'))
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Corriendo http://localhost:${this.port}`)
    });
  }

  middlewares() {
    // usar cors
    this.app.use(cors());

    // parseo de la info del body
    this.app.use(express.json())
    // directorio publico
    this.app.use(express.static("public"));
  }
}

module.exports = Server;