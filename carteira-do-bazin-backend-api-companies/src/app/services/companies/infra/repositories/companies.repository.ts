import { CompanyEntity } from "./entities/company.entity";

export interface ICompanyRepository {
    findAll(): CompanyEntity[];
}
