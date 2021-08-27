import { getRepository, Repository } from "typeorm";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../../../repositories/ISpecificationRepository";
import { Specification } from "../specification";

class SpecificationsRepository implements ISpecificationRepository{
    
    private repository: Repository<Specification>;
    
    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({name, description}: ICreateSpecificationDTO): Promise<void> {
        
        const specification = this.repository.create({
            description,
            name
        });

        await this.repository.save(specification);
    }

    async list(): Promise<Specification[]>{
        return await this.repository.find();

    }

    async findByName(name: string): Promise<Specification>{        
        return await this.repository.findOne({name})    
    }
}


export {SpecificationsRepository}