import { CompanyEntity } from "../../../app/services/companies/infra/repositories/entities/company.entity";
import { CompanyTickerEntity } from "../../../app/services/companies/infra/repositories/entities/companyTicker.entity";

export class CompanyEntityMockBuilder {
    private company: CompanyEntity;

    constructor() {
        this.company = new CompanyEntity();
        this.company.id = "7076c654-1ccb-5035-b8fb-4e57abdcef43";
        this.company.name = "ACME";
        this.company.fullName = "ACME Industries S.A.";
        this.company.taxNumber = "12345678000100";
        this.company.sector = "Explosivos";
        this.company.subSector = "Dinamite";
        this.company.segment = "Destruição";
        this.company.tickers = [
            {
                ticker: "ACME3",
                ipoDate: new Date("2012-12-31"),
                dividends: [
                    {
                        value: 10,
                        year: 2020,
                    },
                ],
            },
        ];
    }

    withId(id: string): CompanyEntityMockBuilder {
        this.company.id = id;
        return this;
    }

    withName(name: string): CompanyEntityMockBuilder {
        this.company.name = name;
        return this;
    }

    withFullName(fullName: string): CompanyEntityMockBuilder {
        this.company.fullName = fullName;
        return this;
    }

    withTaxNumber(taxNumber: string): CompanyEntityMockBuilder {
        this.company.taxNumber = taxNumber;
        return this;
    }

    withSector(sector: string): CompanyEntityMockBuilder {
        this.company.sector = sector;
        return this;
    }

    withSubSector(subSector: string): CompanyEntityMockBuilder {
        this.company.subSector = subSector;
        return this;
    }

    withSegment(segment: string): CompanyEntityMockBuilder {
        this.company.segment = segment;
        return this;
    }

    withTickers(tickers: CompanyTickerEntity[]): CompanyEntityMockBuilder {
        this.company.tickers = tickers;
        return this;
    }

    build(): CompanyEntity {
        return this.company;
    }
}
