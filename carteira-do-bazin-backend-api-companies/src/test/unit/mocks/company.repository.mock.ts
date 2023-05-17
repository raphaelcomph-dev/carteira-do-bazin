import { ICompanyRepository } from "../../../app/services/companies/infra/repositories/companies.repository";
import { CompanyEntity } from "../../../app/services/companies/infra/repositories/entities/company.entity";

// Create a mock class for ICompanyRepository
export class MockCompanyRepository implements jest.Mocked<ICompanyRepository> {
    findAll: jest.Mock<CompanyEntity[]> = jest.fn();
}
