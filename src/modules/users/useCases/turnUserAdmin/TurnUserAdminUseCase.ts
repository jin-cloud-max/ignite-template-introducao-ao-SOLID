import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const checkUser = this.usersRepository.findById(user_id);

    if (!checkUser) {
      throw new Error("User does not exist");
    }

    const turnUserIntoAdmin = this.usersRepository.turnAdmin(checkUser);

    return turnUserIntoAdmin;
  }
}

export { TurnUserAdminUseCase };
