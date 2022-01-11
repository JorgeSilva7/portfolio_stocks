import Price from "../../../src/portfolio/domain/price";
import Portfolio from "../../../src/portfolio/domain/Portfolio";
import PortfolioApplication from "../../../src/portfolio/application/portfolio.application";
import Stock from "../../../src/portfolio/domain/stock";

import chai from "chai";
import "mocha";
const { expect } = chai;

describe("Portfolio", async () => {
	it("Portfolio - Expect correct profit", () => {
		const price1 = new Price(1000, "01-01-2022");
		const price2 = new Price(1500, "02-01-2022");
		const price3 = new Price(2000, "03-01-2022");

		const pricesArr1: Price[] = [price1, price2, price3];
		const pricesArr2: Price[] = [price1, price2, price3];

		const stock1 = new Stock("Stock1", pricesArr1);
		const stock2 = new Stock("Stock2", pricesArr2);

		const stocksArr: Stock[] = [stock1, stock2];

		const portfolio = new Portfolio(stocksArr);

		const portfolioApplication = new PortfolioApplication(portfolio);
		try {
			const profit = portfolioApplication.profit("01-01-2022", "03-01-2022");
			expect(profit).to.be.equal(2000);
		} catch (e) {
			console.log(e);
		}
	});

	it("Portfolio - Expect a error on profit", () => {
		const price1 = new Price(1000, "01-01-2022");
		const price2 = new Price(1500, "02-01-2022");
		const price3 = new Price(2000, "03-01-2022");

		const pricesArr1: Price[] = [price1, price2, price3];
		const pricesArr2: Price[] = [price1, price2, price3];

		const stock1 = new Stock("Stock1", pricesArr1);
		const stock2 = new Stock("Stock2", pricesArr2);

		const stocksArr: Stock[] = [stock1, stock2];

		const portfolio = new Portfolio(stocksArr);

		const portfolioApplication = new PortfolioApplication(portfolio);
		try {
			portfolioApplication.profit("01-01-2022", "05-01-2022");
		} catch (e) {
			expect(e).to.be.a("Error");
		}
	});

	it("Portfolio - Expect a error on create Price (not valid date format)", () => {
		try {
			new Price(1000, "2022-01-01");
		} catch (e) {
			expect(e).to.be.a("Error");
		}
	});

	it("Portfolio - Expect a error on create Price (empty date)", () => {
		try {
			new Price(1000, null);
		} catch (e) {
			expect(e).to.be.a("Error");
		}
	});
});
