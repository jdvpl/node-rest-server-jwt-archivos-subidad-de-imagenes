const { response } = require("express");
const { existeID, existeProductoById } = require("../helpers/db-validators");
const { uploadFiles } = require("../helpers/upload-validator");
const {User,Producto} =require("../models")

const uploadFile=async(req,res=response) => {

  if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    res.status(400).json({msg: 'No hay archivos para subir.'});
    return;
  }
  const extensionesValidas=["png", "jpg", "jpeg", "gif","xlsx"];

  try {
    // const pathFile= await uploadFiles(req.files,extensionesValidas,"kakaroto")
    const pathFile= await uploadFiles(req.files,undefined,"imgs")
    res.status(200).json({msg:pathFile});
  } catch (msg) {
    res.status(400).json({msg})
  }

}

const updateImageDb=async (req, res) => {

  if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    res.status(400).json({msg: 'No hay archivos para subir.'});
    return;
  }
  
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


    const nombre= await uploadFiles(req.files,undefined,collection)
    modelo.img=nombre;
    console.log(modelo)
    await modelo.save();
    return res.status(200).json(modelo);
 
  
}

module.exports ={
  uploadFile,
  updateImageDb
}