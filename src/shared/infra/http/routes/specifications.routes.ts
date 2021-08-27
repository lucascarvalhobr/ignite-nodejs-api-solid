import { Router } from "express";
import { AppError } from "../../../errors/AppError";
import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle)

export {specificationsRoutes}
function ensureAuthenticated(ensureAuthenticated: any) {
    throw new AppError("Function not implemented.");
}

