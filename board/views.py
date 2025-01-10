from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def mainPage(request):
    # return HttpResponse("Hi")
    return render(request, 'board/index1.html')

def visitorPage(request):
    html = render(request, 'board/visitor.html')
    return HttpResponse(html)