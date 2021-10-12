import { RegisterUserController } from "../../../../modules/users/usecases/RegisterUserController";
import { ListUserController } from "../../../../modules/users/usecases/ListUserController";

const listUserController = new ListUserController();
const registerUserController = new RegisterUserController();

export { registerUserController, listUserController };
