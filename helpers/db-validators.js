const Role=require('../models/rol');
const Usuario= require('../models/user');



const esRoleValido= async(rol='') =>{
  const existeRole=await Role.findOne({ rol});
  if(!existeRole){
    throw new Error(`El rol ${rol} no existe en la BD`)
  }
}

const existeCorreo=async(email='')=>{
    // verificar si el correo existe
    const existsEmail=await Usuario.findOne({email});
    if (existsEmail){
      throw new Error(`El Correo ${email} ya existe`);
    }
}

module.exports ={
  esRoleValido,
  existeCorreo
}