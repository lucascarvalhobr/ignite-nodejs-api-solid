import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoriesInMemory } from "../../in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoriesInMemory;

describe("Create Category", () => {

    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoriesInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    })

    it("should be able to create a new category", async () => {

        expect(async () => {
            
            const category = {
                name: "Category Test",
                description: "Category description Test" 
            }
            await createCategoryUseCase.execute(category);
            await createCategoryUseCase.execute(category);   

        }).rejects.toBeInstanceOf(AppError);

    })

    it("should be able to create a new category", async () => {
        const category = {
            name: "Category Test",
            description: "Category description Test" 
        }
        await createCategoryUseCase.execute(category);

        const createdCategory =  await categoriesRepositoryInMemory.findByName(category.name);
    
        expect(createdCategory).toHaveProperty("id");
    })
})
