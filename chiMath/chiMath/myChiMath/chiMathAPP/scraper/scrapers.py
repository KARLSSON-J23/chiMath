from abc import ABC, abstractmethod
from bs4 import BeautifulSoup
import requests
import urllib
from datetime import datetime

# 票券網站抽象類別
class Website(ABC):
 
    def __init__(self, word):
        self.word = word  # 城市名稱屬性
 
    @abstractmethod
    def scrape(self):  # 爬取票券抽象方法
        pass

#全字庫
class Creeper(Website):

    def scrape(self):
 
        result = []  # 回傳結果

        if self.word:  # 如果城市名稱非空值

            # search = str(input('輸入查詢:'))
            url = 'https://www.cns11643.gov.tw/searchQ.jsp?SN=' + \
                str(urllib.parse.quote(self.word))
            # print('查詢網址:' + url)

            r = requests.get(url)
            soup = BeautifulSoup(r.text, "html.parser")
            sel = soup.select("div.col4 div span div ")

            part = str(sel[2])
            # print(sel)

            haveIDS = part.find('<idiv>')

            # 有IDS
            if (haveIDS != -1):
                part = str(part).split('</idiv>')
                IDS = part[0][-1]
                part = str(part[1]).split('</')[0]
            # 沒有IDS
            else:
                # print('該生字沒有IDS')
                part = str(part).split('</div>')[0][-1]
                IDS = 'null'

            # print('IDS:' + IDS)
            # print('部件:' + str(part))

            result.append(
                dict(word=self.word, IDS=IDS, part=part)
            ) 

            


        return result
