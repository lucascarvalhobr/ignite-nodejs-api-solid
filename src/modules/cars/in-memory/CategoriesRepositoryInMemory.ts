import { Category } from "../../../models/category";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";
import { ICreateCategoryDTO } from "../infra/typeorm/repositories/CategoriesRepository";

class CategoriesRepositoriesInMemory implements ICategoriesRepository{
    
    categories: Category[] = [];

    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(c => c.name == name);
        return category;
    }

    async list(): Promise<Category[]> {
        return this.categories;
    }
    
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category();
        
        Object.assign(category, {
            name, description
        });

        this.categories.push(category);
    }
}

export {CategoriesRepositoriesInMemory}