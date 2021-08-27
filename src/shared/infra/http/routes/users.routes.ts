import { Router } from 'express';
import multer from 'multer';
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { ListUsersController } from '../../../../modules/accounts/useCases/listUsers/ListUsersController';
import { UpdateUserAvatarController } from '../../../../modules/accounts/useCases/updateUserAvatar/updateUserAvatarController';
import uploadConfig from '../../../../config/upload'

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createCategoryController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createCategoryController.handle)
usersRoutes.get("/", listUsersController.handle)
usersRoutes.patch(
    "/avatar", 
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
)


export { usersRoutes as usersRoutes };

