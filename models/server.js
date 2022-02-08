const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/database');
class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usuariosRuta='/api/users';
    // conectar a la base de datos
    this.conectarDb()
    // middleware: son funcionalidads para el webserver
    this.middlewares();
    // rutas de mi app
    this.routes();
  }

  async conectarDb(){
    await dbConection()
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