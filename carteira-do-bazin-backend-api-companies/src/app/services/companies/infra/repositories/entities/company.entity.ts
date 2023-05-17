import { CompanyTickerEntity } from "./companyTicker.entity";

export class CompanyEntity {
    public id: string;
    public name: string;
    public fullName: string;
    public taxNumber: string;
    public sector: string;
    public subSector: string;
    public segment: string;
    public tickers: CompanyTickerEntity[];
}
