import requests
import json
from abc import ABC, abstractmethod


class Website(ABC):

    def __init__(self, word):
        self.word = word  # 城市名稱屬性

    @abstractmethod
    def Zitool(self):  # 爬取票券抽象方法
        pass  # HSO


class ZiCreeper(Website):

    def Zitool(self):

        result = []

        if self.word:

            # search = str(input('輸入查詢:'))
            url = 'https://zi.tools/api/zi/'+self.word
            search_icon = 'https://ziphoenicia-1300189285.cos.ap-shanghai.myqcloud.com/icon_svg/'+self.word+'.svg'
            # print("搜尋網址"+url)
            headers = {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'}
            data = requests.get(url, headers=headers)
            data.encoding = 'utf-8'
            dataJs = json.loads(data.text)
            ZiIDS = dataJs['ids_zi_tools']
            # print(f"IDS：{dataJs['ids_zi_tools']}")
            # print("圖片："+search_icon)

            result.append(
                dict(search_icon=search_icon, ZiIDS=ZiIDS)
            )

            # search_icon='https://pp.qianp.com/zidian/kai/29/7121.png'
            # result.append(
            #    dict(search_icon=search_icon)
            # )

        return result
