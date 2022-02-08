const {Schema,model}= require('mongoose');


const UsuarioSchema=Schema({
  name:{
    type:String,
    required:[true,'El nombre es obligatorio'],
  },
  email:{
    type:String,
    required:[true,'El correo es obligatorio'],
    unique:true
  },
  password:{
    type:String,
    required:[true,'El contraseña es obligatoria'],
  },
  image:{
    type:String,
  },
  role:{
    type:String,
    required:[true,'El rol es obligatorio'],
    enum:['ADMIN_ROLE','USER_ROLE']
  },
  status:{
    type:String,
    default:true
  },
  google:{
    type:Boolean,
    default:false
  },
})

module.exports=model('User',UsuarioSchema);