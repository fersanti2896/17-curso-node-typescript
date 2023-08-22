import Router from 'express';
import { check } from 'express-validator';
import { createUser, deleteUser, updateUser, userById, usersAll } from '../controllers/usuarioController';
import validarCampos from '../middlewares/validar-campos';
import { isEmailExists } from '../helpers/db-validadores';

const router = Router();

router.get('/', usersAll);

router.get('/:id', [
    check('id', 'El id es obligatorio').not().isEmpty(),
    validarCampos
], userById);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo').custom( isEmailExists ),
    validarCampos
], createUser);

router.put('/:id', [
    check('id', 'El id es obligatorio').isNumeric(),
    validarCampos
], updateUser);

router.delete('/:id', [
    check('id', 'El id es obligatorio').isNumeric(),
    validarCampos
],deleteUser);

export default router;