import{container} from 'tsyringe'
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/CategoriesRespository';
import { SpecificationsRepository } from '../../modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);