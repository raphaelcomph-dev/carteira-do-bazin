import { NotFoundException } from "@nestjs/common";
import { Company } from "../domain/company.model";
import { ICompanyRepository } from "../infra/repositories/companies.repository";

export class UpdateCompanyDividendsUseCase {
    private _companies: Company[] = [];

    constructor(private _companyRepository: ICompanyRepository) {}

    execute(ticker: string, year: number, value: number): void {
        this._companies = Company.fromEntities(this._companyRepository.findAll());

        this.findCompanyByTicker(ticker);
    }

    private findCompanyByTicker(ticker: string): Company {
        let companyFound = null;

        this._companies.forEach((c) => {
            c.tickers.forEach((ct) => {
                if (ct.ticker === ticker) {
                    companyFound = c;
                }
            });
        });
        if (!companyFound) {
            throw new NotFoundException(`O ticker "${ticker}" não está cadastrado.`);
        }
        return companyFound;
    }
}
