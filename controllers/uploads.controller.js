const path = require("path")
const fs=require("fs")

const { response } = require("express");
const { uploadFiles } = require("../helpers/upload-validator");
const {User,Producto} =require("../models")


const uploadFile=async(req,res=response) => {
  const extensionesValidas=["png", "jpg", "jpeg", "gif"];
  try {
    // const pathFile= await uploadFiles(req.files,extensionesValidas,"kakaroto")
    const pathFile= await uploadFiles(req.files,undefined,"imgs")
    res.status(200).json({msg:pathFile});
  } catch (msg) {
    res.status(400).json({msg})
  }

}

const updateImageDb=async (req, res) => {

  const {collection,id}=req.params;
  let modelo;
  switch (collection) {
    case 'users':
        modelo =await User.findById(id);
        if(!modelo) {
          return res.status(400).json({msg: `No existe usuario con el id: ${id}`})
        }
      break;
    case 'productos':
      modelo =await Producto.findById(id);
      if(!modelo) {
        return res.status(400).json({msg: `No existe producto con el id: ${id}`})
      }
    break;
  
    default:
      return res.status(500).json({msg: `Se me olvido validar esta parte.`})
  }
    // limpiar imagenes previas del usuario
    if(modelo.img){
      // hay que borrar la imagen del servidor
      const pathImagen=path.join( __dirname,'../uploads/',collection,modelo.img);
      if(fs.existsSync(pathImagen)){
        fs.unlinkSync(pathImagen);
      }
    }
    const nombre= await uploadFiles(req.files,undefined,collection)
    modelo.img=nombre;
    await modelo.save();
    return res.status(200).json(modelo);
}

module.exports ={
  uploadFile,
  updateImageDb
}