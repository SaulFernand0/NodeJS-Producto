import{ Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/user.controller'

router.get('/', userCtr.readAllUsers);
router.get('/:id', userCtr.readUsers);
router.post('/add', userCtr.createUser);
router.put('/update/:id', userCtr.updateUsers);
router.delete('/delete/:id', userCtr.delUsers);

export default router;