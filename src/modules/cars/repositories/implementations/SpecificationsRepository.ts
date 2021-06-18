import { Specification } from "../../model/specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository{
    
    private specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    static getInstance(){
        if(!SpecificationsRepository.INSTANCE){
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }

    findByName(name: string): Specification {

        const category = this.specifications.find(c => c.name.toUpperCase === name.toUpperCase);

        return category;
    }

    list(): Specification[] {
        return this.specifications;
    }
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();
    
        Object.assign(specification,{    
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(specification);
    }
}


export {SpecificationsRepository}