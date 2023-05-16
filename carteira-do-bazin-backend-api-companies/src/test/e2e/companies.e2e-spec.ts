import { Test, TestingModule } from "@nestjs/testing";
import { HttpStatus, INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../../app.module";

describe("/companies/... (e2e)", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(
            new ValidationPipe({
                transform: true,
            }),
        );
        await app.init();
    });

    describe("Update dividends", () => {
        it("Should not throw error when updating company dividends by year", async () => {
            const response = await request(app.getHttpServer())
                .patch("/companies/BBAS3/dividends/2015")
                .send({ value: 3.5 });

            expect(response.status).toEqual(HttpStatus.OK);
        });

        it("Should return BadReques updating company dividends by year when there is no value", async () => {
            const response = await request(app.getHttpServer()).patch("/companies/BBAS3/dividends/2015").send({});

            expect(response.status).toEqual(HttpStatus.BAD_REQUEST);
            expect(response.body.message[0]).toEqual("O campo 'value' é obrigatório no corpo da requisição.");
        });

        it.each([[0], [-10], ["Not a number"]])(
            "Should return BadRequest updating company dividends by year when the value is not a positive number",
            async (value) => {
                const response = await request(app.getHttpServer())
                    .patch("/companies/BBAS3/dividends/2015")
                    .send({ value });

                expect(response.status).toEqual(HttpStatus.BAD_REQUEST);
                expect(response.body.message[0]).toEqual("O campo 'value' precisa ser um valor numérico maior que 0.");
            },
        );
        // deve verificar se o arquivo json foi atualizado quando a requisição for concluida com sucesso
        // deve retornar erro quando código da empresa não existir
        // deve retornar erro quando ano for maior que ano atual
        // deve retornar erro quando ano for menor que 2000
    });
});
