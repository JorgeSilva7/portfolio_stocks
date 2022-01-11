import Price from "./price";
import moment from "moment";

class Stock {
	name: string;
	prices: Price[];

	constructor(name: string, prices: Price[]) {
		this.name = name;
		this.prices = prices;
	}

	price = (date: Date): number => {
		const found_price = this.prices.find((price) =>
			moment(price.date.value, "DD-MM-YYYY").isSame(moment(date, "DD-MM-YYYY"))
		);
		if (!found_price)
			throw new Error(
				`No price found for ${this.name} in day ${moment(date).format(
					"DD-MM-YYYY"
				)}`
			);

		return found_price.price;
	};
}

export default Stock;
