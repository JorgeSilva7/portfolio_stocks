import DateValue from "./dateValue";

class Price {
	price: number;
	date: DateValue;

	constructor(price: number, date: string) {
		this.price = price;
		this.date = new DateValue(date);
	}
}

export default Price;
