import Stock from "./stock";
import { getDaysBetweenDates } from "../../shared/utils/functions";
import DateValue from "./dateValue";

class Porfolio {
	stocks: Stock[];

	constructor(stocks: Stock[]) {
		this.stocks = stocks;
	}
}

export default Porfolio;
