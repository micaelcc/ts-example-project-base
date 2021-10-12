import { Router } from 'express';

import { registerUserController  } from '../http/factories/MakeUserController';

const usersRoutes = Router();

usersRoutes.post('/', registerUserController.handle);

export { usersRoutes };
