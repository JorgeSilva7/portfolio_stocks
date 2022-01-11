import DateValue from "../domain/dateValue";
import Portfolio from "../domain/Portfolio";

class PortfolioApplication {
	private portfolio: Portfolio;

	constructor(portfolio: Portfolio) {
		this.portfolio = portfolio;
	}

	profit = (init_date: string, end_date: string): number => {
		const init_date_VO = new DateValue(init_date, "init_date");
		const end_date_VO = new DateValue(end_date, "end_date");

		const init_value = this.portfolio.stocks.reduce(function (a, b) {
			return a + b.price(init_date_VO.value);
		}, 0);
		const final_value = this.portfolio.stocks.reduce(function (a, b) {
			return a + b.price(end_date_VO.value);
		}, 0);
		const profit = final_value - init_value;
		return profit;
	};
}

export default PortfolioApplication;
