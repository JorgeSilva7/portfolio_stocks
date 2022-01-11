from models.portfolio import Portfolio
from models.price import Price
from models.stock import Stock
from controllers.portfolioController import PortfolioController

import datetime

price1 = Price(1000, datetime.datetime(2022, 1, 1))
price2 = Price(1500, datetime.datetime(2022, 1, 2))
price3 = Price(2000, datetime.datetime(2022, 1, 3))

pricesArr1 = [price1, price2, price3]
pricesArr2 = [price1, price2, price3]

stock1 = Stock("Stock1", pricesArr1)
stock2 = Stock("Stock2", pricesArr2)

stocksArr = [stock1, stock2]

portfolio = Portfolio(stocksArr)
portfolioController = PortfolioController(portfolio)

try:
    profit = portfolioController.profit(datetime.datetime(2022, 1, 1), datetime.datetime(2022, 1, 3))
    print('Profit:', str(profit))
    assert profit == 2000, "Should be 2000"
except Exception as e:
    print(e)