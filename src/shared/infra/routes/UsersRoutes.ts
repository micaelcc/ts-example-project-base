import { Router } from 'express';

import { registerUserController, listUserController  } from '../http/factories/MakeUserController';

const usersRoutes = Router();

usersRoutes.post('/', registerUserController.handle);

usersRoutes.get('/', listUserController.handle);

export { usersRoutes };
