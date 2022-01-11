class Stock:
    def __init__(self, name, prices):
        self.name = name
        self.prices = prices

    def price(self, date):
        found_price = [price for price in self.prices if price.date == date]
        if not len(found_price):
            raise Exception("No price found for "+self.name+" in day "+date.strftime("%d/%m/%Y"))
        return found_price[0].price
