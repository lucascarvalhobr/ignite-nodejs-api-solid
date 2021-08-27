import { Category } from "../../../models/category";
import { ICreateCategoryDTO } from "../infra/typeorm/repositories/CategoriesRespository";

interface ICategoriesRepository{
    findByName(name: string): Promise<Category>;

    list(): Promise<Category[]>;

    create({name, description}: ICreateCategoryDTO): Promise<void>;
}

export {ICategoriesRepository}