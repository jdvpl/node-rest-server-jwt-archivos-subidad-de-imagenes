const {response}=require('express')
const bcrypt=require('bcryptjs')
const User= require('../models/user');

const userGet=(req, res=response) => {
  const {q,api,name="Sin nombre"}=req.query;
  res.json(
    {
      "Get":"Desde el controller",
      q,
      api,
      name
    }
    );
}

const userPut=async(req, res=response) => {
  const id=req.params.id;
  const {password,google,email, ...resto}=req.body;
  //  validar con la base de datos

  if(password){
    const salt=bcrypt.genSaltSync();
    resto.password=bcrypt.hashSync(password,salt);
  }

  const usuario=await User.findByIdAndUpdate(id, resto)
  console.log(id);
  res.json(
    usuario
    );
}
const userPost=async(req, res) => {

  
  const {name,email,role,password}=req.body;
  const user=new User({name,email,role,password})
  // encriptar la contraseña
  // generar un una encriptacion de 10 caracteres
  const salt=bcrypt.genSaltSync();
  user.password=bcrypt.hashSync(password,salt);
  // guardar en la base de datos
  await user.save()
  res.json(user);
}
const userDelete=(req, res) => {
  res.json(
    {
      "Delete":"aa"
    }
    );
}


module.exports ={
  userGet,
  userPut,
  userPost,
  userDelete
}