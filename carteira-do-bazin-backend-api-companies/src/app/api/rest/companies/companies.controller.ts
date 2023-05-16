import { Body, Controller, Param, Patch, Req } from "@nestjs/common";
import { RequestCompaniesDividendsByYearDto } from "./dtos/requestCompaniesDividendsByYear.dto";
import { RequestCompaniesDividendsDto } from "./dtos/requestCompaniesDividends.dto";

@Controller("companies")
export class CompaniesController {
    @Patch("/:ticker/dividends/:year")
    async updateDividendsByYear(
        @Param("ticker") ticker: string,
        @Param("year") year: number,
        @Body() requestDto: RequestCompaniesDividendsByYearDto,
    ) {
        // Put your magic here
    }
}
