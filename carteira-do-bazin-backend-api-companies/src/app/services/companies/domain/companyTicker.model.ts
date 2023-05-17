import { DateValue } from "../../../shared/models/dateValue.model";
import { Indicators } from "./indicators.model";
import { YearValue } from "../../../shared/models/yearValue.model";
import { CompanyTickerEntity } from "../infra/repositories/entities/companyTicker.entity";

export class CompanyTicker {
    // TODO: converter de público p/ privado
    public ticker: string;
    public ipoDate: Date;
    public lastPrice: DateValue;
    public indicators: Indicators;
    public dividends: YearValue[];

    public static fromEntities(entities: CompanyTickerEntity[]): CompanyTicker[] {
        return entities.map((e) => CompanyTicker.fromEntity(e));
    }

    public static fromEntity(entity: CompanyTickerEntity): CompanyTicker {
        return {
            ticker: entity.ticker,
            ipoDate: entity.ipoDate,
            lastPrice: null,
            indicators: null,
            dividends: entity.dividends,
        };
    }
}
