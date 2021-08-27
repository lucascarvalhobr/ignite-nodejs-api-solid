import { CarsRepositoryInMemory } from "modules/cars/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase : CreateCarUseCase;
let carsRepository : CarsRepositoryInMemory;

describe("Create car", () => {
    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepository);
    })
    
    it("should be able to create a new car", async () => {
        await createCarUseCase.execute({
            name: "", 
            description: "Description car", 
            daily_rate: 100, 
            license_plate: "ABC", 
            fine_amount: 60, 
            brand:"Brand", 
            category_id:"category"
        });
    })
})