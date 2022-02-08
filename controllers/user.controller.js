const {response}=require('express')
const bcrypt=require('bcryptjs')
const User= require('../models/user')

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

const userPut=(req, res=response) => {
  const id=req.params.id;
  console.log(id);
  res.json(
    {
      "Put":"aa"
    }
    );
}
const userPost=async(req, res) => {

  const {name,email,role,password}=req.body;

  const user=new User({name,email,role,password});


  // verificar si el correo existe


  // encriptar la contraseña
  // generar un una encriptacion de 10 caracteres
  const salt=bcrypt.genSaltSync();
  user.password=bcrypt.hashSync(password,salt);
  // guardar en la base de datos
  await user.save()
  res.json(
    {
      "Post":"aaJAa",
      user
    }
    );
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