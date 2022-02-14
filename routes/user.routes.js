const {Router}=require('express');
const { check } = require('express-validator');
const { userGet, userPut, userPost, userDelete } = require('../controllers/user.controller');
const { esRoleValido } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const router=Router();


router.get('/', userGet);
router.put('/:id', userPut);
router.post('/', [
  check('name','El nombre es obligatorio').not().isEmpty(),
  check('password','La contraseña debe tener minimo 6 caracteres').isLength({ min: 6}),
  check('email','Correo no valido').isEmail(),
  // check('role','No es un rol valido').isIn(["ADMIN_ROLE","USER_ROLE"]),
  check('role').custom(esRoleValido ),
  validarCampos
],userPost);
router.delete('/', userDelete);


module.exports =router;