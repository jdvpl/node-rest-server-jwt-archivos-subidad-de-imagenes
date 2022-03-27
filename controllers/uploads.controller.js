const { response } = require("express");


const uploadFile=(req,res=response) => {
  res.json({msg:'cargar archivo'})
}

module.exports ={
  uploadFile
}