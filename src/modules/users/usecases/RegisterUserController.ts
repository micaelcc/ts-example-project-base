import { IBaseController } from "../../../shared/infra/http/models/IBaseController";
import { Request, Response } from 'express';
import { container } from "tsyringe";
import { RegisterUser } from "./RegisterUser";

export class RegisterUserController implements IBaseController {
  async handle (request: Request, response: Response): Promise<Response> {
    const registerUser = container.resolve(RegisterUser);

    try {
      const { name, email, scrap} = request.body;
      
      await registerUser.execute({
        name,
        email,
        scrap,
      });

      return response.status(200).send();
    }catch(error) {
      console.error(error);
      return response.status(400).send();
    }
  }
}