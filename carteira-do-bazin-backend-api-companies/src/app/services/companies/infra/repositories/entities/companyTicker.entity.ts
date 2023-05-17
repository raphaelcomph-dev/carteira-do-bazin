import { YearValue } from "../../../../../shared/models/yearValue.model";

export class CompanyTickerEntity {
    public ticker: string;
    public ipoDate: Date;
    public dividends: YearValue[];
}
