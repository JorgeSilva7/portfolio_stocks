import PortfolioApplication from "./portfolio/application/portfolio.application";
import Portfolio from "./portfolio/domain/Portfolio";
import Price from "./portfolio/domain/price";
import Stock from "./portfolio/domain/stock";

class Test {
	startTest = () => {
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
			console.log("Profit:", profit);
		} catch (e) {
			console.log(e);
		}
	};
}

const test = new Test().startTest();
