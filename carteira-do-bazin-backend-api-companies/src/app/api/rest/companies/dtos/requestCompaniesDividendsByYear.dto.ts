import { IsNotEmpty, IsPositive, Min } from "class-validator";

export class RequestCompaniesDividendsByYearDto {
    @IsNotEmpty({ message: "O campo 'value' é obrigatório no corpo da requisição." })
    @IsPositive({ message: "O campo 'value' precisa ser um valor numérico maior que 0." })
    value: number;
}
