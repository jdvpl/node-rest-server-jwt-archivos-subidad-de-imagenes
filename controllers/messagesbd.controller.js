const { response } = require("express")
const { MensajeBd}=require("../models")


// obtener todas la categorias- paginacion-total y populate(relacion de quien la creo)
const getMessages=async(req, res=response) => {
  const {limite=10, desde=0}=req.query;
  const [total,mensajes]=await Promise.all([
    MensajeBd.countDocuments(),
    MensajeBd.find()
      .skip(Number(desde))
      .limit(Number(limite))
      .sort({"_id":-1})
  ])
  res.json({total,limite,desde, mensajes});
}




// crear caregoria
const createMessage = async(req,res=response)=>{
  const name = req.body.name.toUpperCase();
  const message=req.body.message;
  const phone=req.body.phone;
  const fecha=Date.now()
  console.log(fecha)
  // generar la data al guardar
  const data={
    name,
    message,
    date:fecha,phone,
  }
  try {
    const mensaje=new MensajeBd(data);
    await mensaje.save();
    return  res.status(200).json(mensaje);
  } catch (error) {
    return res.status(500).json(error)
  }
}



module.exports = {
  createMessage,
  getMessages
}