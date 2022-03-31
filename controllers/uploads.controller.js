const { response } = require("express");
const path = require("path")

const uploadFile=(req,res=response) => {

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).json({msg: 'No hay archivos.'});
    return;
  }
  if (!req.files.file) {
    res.status(400).json({msg: 'No hay archivos para subir.'});
    return;
  }

  // validar la extension
  const extensionesValidas=["png", "jpg", "jpeg", "gif"]

  const {file} = req.files;

  const nombreCortado=file.name.split('.');
  const extension=nombreCortado[nombreCortado.length - 1];

  if(!extensionesValidas.includes(extension)){
    return res.status(400).json({msg: `La extension ${extension} no es permitida, ${extensionesValidas}`})
  }
  res.json({extension})

  // const uploadPath =path.join( __dirname, '../uploads/' + file.name);

  // file.mv(uploadPath, (err)=> {
  //   if (err) {
  //     return res.status(500).json({err});
  //   }

  //   res.json({msg:'El archivo se subio a ' + uploadPath});
  // });
}

module.exports ={
  uploadFile
}