import urllib
import requests
from bs4 import BeautifulSoup

search = str(input('輸入查詢:'))
url = 'https://www.cns11643.gov.tw/searchQ.jsp?SN=' + \
    str(urllib.parse.quote(search))
print('查詢網址:' + url)

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

print('IDS:' + IDS)
print('部件:' + str(part))
