import { Response, Request } from "express";
import { container } from "tsyringe";
import { IBaseController } from "../../../shared/infra/http/models/IBaseController";
import { ListUser } from "./ListUser";

export class ListUserController implements IBaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUser = container.resolve(ListUser);

    try {
      const users = await listUser.execute();

      return response.status(200).send(users);
    }catch(error) {
      console.error(error);
      return response.send();
    }
  }
}