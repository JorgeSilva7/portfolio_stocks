class PortfolioController:
    def __init__(self, portfolio):
        self.portfolio = portfolio

    def profit(self, init_date, end_date):
        init_value = sum(stock.price(init_date) for stock in self.portfolio.stocks)
        end_value = sum(stock.price(end_date) for stock in self.portfolio.stocks)

        return end_value - init_value