import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest{
    name:string;
    description: string;
}

class CreateSpecificationUseCase{

    constructor(private specificationsCategories : ISpecificationRepository){
    }
    
    execute({name, description}: IRequest) : void{
        const categoryAlreadyExists = this.specificationsCategories.findByName(name);

        if(categoryAlreadyExists){
            throw new Error("Category already exists!");
        }
    
        this.specificationsCategories.create({name, description});
    }
}

export {CreateSpecificationUseCase}