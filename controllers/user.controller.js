const {response}=require('express')
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

  const body=req.body;

  const user=new User(body);
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