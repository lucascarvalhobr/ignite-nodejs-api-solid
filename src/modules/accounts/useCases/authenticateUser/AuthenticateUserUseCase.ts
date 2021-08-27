
import { compare } from "bcrypt";
import { AppError } from "../../../../shared/errors/AppError";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest{
    email: string;
    password: string;
}

@injectable()
class AuthenticateUserUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({email, password} : IRequest) {
        const user = await this.usersRepository.findByEmail(email);

        if(!user){
            throw new AppError("Email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new AppError("Email or password incorrect!");
        }

        const token = sign({}, "278c2211f72eb09b1e32a071cb2c811f", {
            subject:  user.id === undefined ? "" : user.id,
            expiresIn: "1d"
        });

        const tokenReturn = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn;
    }
}

export{AuthenticateUserUseCase};