const {Router}=require('express');
const { check } = require('express-validator');
const { userGet, userPut, userPost, userDelete } = require('../controllers/user.controller');

const router=Router();


router.get('/', userGet);
router.put('/:id', userPut);
router.post('/', [
  check('email','Correo no valido').isEmail()
],userPost);
router.delete('/', userDelete);


module.exports =router;