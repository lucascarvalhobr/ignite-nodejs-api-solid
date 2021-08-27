import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest{
    name:string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase{

    constructor(
        @inject("SpecificationsRepository")
        private specificationsCategories : ISpecificationRepository){
    }
    
    async execute({name, description}: IRequest) : Promise<void>{
        const categoryAlreadyExists = await this.specificationsCategories.findByName(name);

        if(categoryAlreadyExists){
            throw new AppError("Category already exists!");
        }
    
        this.specificationsCategories.create({name, description});
    }
}

export {CreateSpecificationUseCase}