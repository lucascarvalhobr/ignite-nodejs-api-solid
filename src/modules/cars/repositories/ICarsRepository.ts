import { Car } from '../infra/typeorm/car';
import {ICreateCarDTO} from './../dtos/ICreateCarDTO'
export interface ICarsRepository{
    create(data: ICreateCarDTO): Promise<Car>;
    findByLicensePlate(license_plate: string): Promise<Car>;
}
