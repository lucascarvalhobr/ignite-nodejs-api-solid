import { CategoriesRepository } from "../../repositories/implementations/CategoriesRespository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoryRepository =  CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export {listCategoriesController};