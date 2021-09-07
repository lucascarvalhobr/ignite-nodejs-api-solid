import { Category } from "../../../models/category";
import { ICreateCategoryDTO } from "../infra/typeorm/repositories/CategoriesRepository";

interface ICategoriesRepository{
    findByName(name: string): Promise<Category>;

    list(): Promise<Category[]>;

    create({name, description}: ICreateCategoryDTO): Promise<void>;
}

export {ICategoriesRepository}