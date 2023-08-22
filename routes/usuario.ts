import Router from 'express';
import { createUser, deleteUser, updateUser, userById, usersAll } from '../controllers/usuarioController';

const router = Router();

router.get('/', usersAll);

router.get('/:id', userById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;