import {Request, Response} from "express"
import { CreateSpeficicationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController{

    constructor(private createSpecificationUseCase: CreateSpeficicationUseCase){

    }

    handle(request: Request, response: Response){

        const {name, description} = request.body;

        this.createSpecificationUseCase.execute({name, description});
    
        return response.status(201).send();
    }

    // constructor(private specificationsRepository : CreateSpeficicationUseCase){
    // }
    
    // execute({name, description}: IRequest) : void{
    //     const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    //     if(specificationAlreadyExists){
    //         throw new Error("Specification already exists!");
    //     }
    
    //     this.specificationsRepository.create({name, description});
    // }
}

export {CreateSpecificationController}