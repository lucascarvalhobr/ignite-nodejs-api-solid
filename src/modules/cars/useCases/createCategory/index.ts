import { CategoriesRepository } from "../../repositories/implementations/CategoriesRespository";
import { CreaterCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepository = CategoriesRepository.getInstance();
const categoryCreateUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreaterCategoryController(categoryCreateUseCase);

export {createCategoryController}