Feature("Companies");

const fs = require("fs");

Scenario("fetch all B3 current listed companies", async ({ I }) => {
    const url = `https://www.dadosdemercado.com.br/bolsa/acoes`;
    I.amOnPage(url);
    let rows = await I.grabNumberOfVisibleElements("table.normal-table tbody tr");
    let tickers = [];

    for (let i = 0; i < rows; i++) {
        let firstTd = await I.grabTextFrom(`table.normal-table tbody tr:nth-child(${i + 1}) td:first-child`);
        tickers.push(firstTd);
    }

    sortAlphabetically(tickers);

    const jsonContent = JSON.stringify(tickers, null, "4");

    fs.writeFile("./robots/companies-ticker.json", jsonContent, "utf8", function (err) {
        if (err) {
            console.log("An error occurred while writing to the file:", err);
        } else {
            console.log("File has been successfully replaced with the array.");
        }
    });
});

function sortAlphabetically(tickers) {
    tickers.sort((a, b) => a.localeCompare(b));
}
