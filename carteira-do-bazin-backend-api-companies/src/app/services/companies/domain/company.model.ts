import { CompanyEntity } from "../infra/repositories/entities/company.entity";
import { CompanyTicker } from "./companyTicker.model";

export class Company {
    // TODO: converter de público para privado
    public name: string;
    public fullName: string;
    public taxNumber: string;
    public sector: string;
    public subSector: string;
    public segment: string;
    public tickers: CompanyTicker[];

    public static fromEntities(entities: CompanyEntity[]): Company[] {
        return entities.map((e) => Company.fromEntity(e));
    }

    public static fromEntity(entity: CompanyEntity): Company {
        return {
            name: entity.name,
            fullName: entity.fullName,
            taxNumber: entity.taxNumber,
            sector: entity.sector,
            subSector: entity.subSector,
            segment: entity.segment,
            tickers: CompanyTicker.fromEntities(entity.tickers),
        };
    }
}
