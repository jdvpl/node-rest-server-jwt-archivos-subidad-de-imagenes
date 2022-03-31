const { response } = require("express");
const { uploadFiles } = require("../helpers/upload-validator");


const uploadFile=async(req,res=response) => {

  if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    res.status(400).json({msg: 'No hay archivos para subir.'});
    return;
  }

  const pathFile= await uploadFiles(req.files)
  res.status(200).json({msg:pathFile});

}

module.exports ={
  uploadFile
}