import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/car";
import { ICarsRepository } from "../repositories/ICarsRepository";

export class CarsRepositoryInMemory implements ICarsRepository{
    cars: Car[] = [];

    async create({
        brand,
        category_id,
        daily_rate,
        description,
        fine_amount,
        name,
        license_plate
    }: ICreateCarDTO): Promise<void> {
        const car = new Car();
        Object.assign(car,{
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            name,
            license_plate
        })

        this.cars.push(car);     
    }
}