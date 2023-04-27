import requests
from bs4 import BeautifulSoup as bs
#HSO

def strokes(word):
    web = requests.get('https://chinese-linguipedia.org/search_inner.html?keywords='+word)
    soup = bs(web.text,"html.parser") #將網頁資料以html.parser
    sel = soup.find(class_="js-writing-img main-img")
    sel = sel.select('img')
    
    print(sel[0])
strokes('呀')