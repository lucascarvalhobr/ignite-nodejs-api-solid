import { Category } from "../../../models/category";
import { ICreateCategoryDTO } from "./implementations/CategoriesRespository";

interface ICategoriesRepository{
    findByName(name: string): Category;

    list(): Category[];

    create({name, description}: ICreateCategoryDTO): void;
}

export {ICategoriesRepository}