const companiesTicker = require("./companies-ticker.json");

Feature("Dividends");

Scenario("fetch companies paid dividends per year", async ({ I }) => {
    for (let index = 0; index < 5; index++) {
        const ticker = companiesTicker[index];

        const data = await getJSON(I, ticker);
        let totalInDividendsPaid = calculateTotalDividends(data);
        console.log(`${ticker}: R$ ${totalInDividendsPaid}`);
    }
});

const getJSON = async (I, ticker) => {
    const startDate = "2015-01-01";
    const endDate = "2015-12-31";
    const url = `https://statusinvest.com.br/acao/getearnings?IndiceCode=&Filter=${ticker}&Start=${startDate}&End=${endDate}`;

    // navigate to the page
    I.amOnPage(url);

    // get the page content
    const content = await I.grabHTMLFrom("pre");

    // parse the content as JSON
    const data = JSON.parse(content);

    return data;
};
function calculateTotalDividends(data) {
    let total = 0;
    data.datePayment.forEach((e) => (total += +e.resultAbsoluteValue.replace(",", ".")));
    return total;
}
