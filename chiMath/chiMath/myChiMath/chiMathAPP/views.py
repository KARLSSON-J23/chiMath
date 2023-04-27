from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse, HttpResponseRedirect
from .scraper.scrapers import Creeper
from .scraper.ZiTool import ZiCreeper
# Create your views here.


def homePage(request):
    # 讀取名為myfirst.html的檔案並回傳一個Template物件
    template = loader.get_template('homePage.html')
    # 將Template物件渲染到瀏覽器上
    return HttpResponse(template.render())  # 回傳template


# def chiMain(request):
#     # 讀取名為myfirst.html的檔案並回傳一個Template物件
#     template = loader.get_template('chiMain.html')
#     # 將Template物件渲染到瀏覽器上
#     return HttpResponse(template.render())  # 回傳template


def mathClock(request):
    # 讀取名為myfirst.html的檔案並回傳一個Template物件
    template = loader.get_template('mathClock.html')
    # 將Template物件渲染到瀏覽器上
    return HttpResponse(template.render())  # 回傳template


def chiMain(request):
    creeper = Creeper(request.POST.get("word"))
    Zi = ZiCreeper(request.POST.get("word"))
    context = {
        "words": creeper.scrape(),
        "zis": Zi.Zitool()
    }
    return render(request, "chiMain.html", context)


def chiStrokes(request):
    context = {}
    context['Title'] = '筆順'
    return render(request, "chiStrokes.html", context)
