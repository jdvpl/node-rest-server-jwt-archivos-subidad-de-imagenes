const {response}=require('express')


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
const userPost=(req, res) => {

  const {name,age}=req.body;
  res.json(
    {
      "Post":"aaJAa",
      name,age
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