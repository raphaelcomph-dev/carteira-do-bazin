import { NotFoundException } from "@nestjs/common";
import { UpdateCompanyDividendsUseCase } from "../../../app/services/companies/usecases/updateCompanyDividends.usecase";
import { MockCompanyRepository } from "../mocks/company.repository.mock";
import { CompanyEntity } from "../../../app/services/companies/infra/repositories/entities/company.entity";
import { getBuilder } from "../mocks/builder";
import { CompanyEntityMockBuilder } from "../mocks/company.entity.mock.builder";

describe("UpdateCompanyDividendsUseCase", () => {
    let useCase: UpdateCompanyDividendsUseCase;
    let companyRepository: MockCompanyRepository;

    beforeEach(async () => {
        // const app: TestingModule = await Test.createTestingModule({
        //     controllers: [AppController],
        //     providers: [AppService],
        // }).compile();
        companyRepository = new MockCompanyRepository();
        useCase = new UpdateCompanyDividendsUseCase(companyRepository);
    });

    it("should throw error when company ticker doesn't exists", () => {
        const mockCompanies: CompanyEntity[] = [new CompanyEntityMockBuilder().build()];
        companyRepository.findAll.mockReturnValue(mockCompanies);

        const test = () => {
            useCase.execute("XYWZ", 2020, 42.5);
        };
        expect(test).toThrow(NotFoundException);
    });
});
