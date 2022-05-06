const {Schema,model}=require('mongoose')

const MensajeBdSchema=Schema({
  name:{
    type:String,
    required:[true,"El nombre es obligatorio"],
  },
  message:{
    type: String,
    required:true,
  },
  date:{
    type:Number,
  },
  phone:{
    type:String,
  }
});

MensajeBdSchema.methods.toJSON=function(){
  const {__v,_id,...mensaje}=this.toObject();
  mensaje.uid=_id;
  return mensaje
}

module.exports =model('Mensajebd',MensajeBdSchema)