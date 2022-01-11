import moment from "moment";
import DateValue from "../../portfolio/domain/dateValue";

const getDaysBetweenDates = (start_date: DateValue, end_date: DateValue) => {
	const startDate_moment = moment(start_date.value, "DD-MM-YYYY");
	const endDate_moment = moment(end_date.value, "DD-MM-YYYY");

	var now = startDate_moment.clone(),
		dates = [];

	while (now.isSameOrBefore(endDate_moment)) {
		dates.push(now.format("DD-MM-YYYY"));

		now.add(1, "days");
	}

	return dates;
};

export { getDaysBetweenDates };
