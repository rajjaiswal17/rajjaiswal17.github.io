# I have created this file - Raj Jaiswal

from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    # return HttpResponse("Home")
    # para = {'name': 'raj', 'place': 'meerut'}
    return render(request, 'index.html')


def analyze(request):
    djtext = request.POST.get('text', 'default')
    checkpunc = request.POST.get('option1', 'off')
    checkcap = request.POST.get('option2', 'off')
    newrem = request.POST.get('option3', 'off')
    sprem = request.POST.get('option4', 'off')

    purpose = ""
    a = djtext
    if checkpunc == 'on':
        a = ""
        purpose = '(remove punctuations)'
        punc = '''"'>.<,=?/}]|\{[()!@#$$%^:;&*+_-'''
        for char in djtext:
            if char not in punc:
                a = a + char
    if checkcap == 'on':
        purpose += '(To upper  case) '
        a = a.upper()

    if newrem == 'on':
        cpy = a
        a = ""
        purpose += '(Remove new lines) '

        for char in cpy:
            if (char != '\n') and (char != '\r'):
                a = a + char


    if sprem == 'on':
        cpy = a
        a = ""
        purpose += '(Remove extra space) '
        for i, char in enumerate(cpy):
            if not (djtext[i] == " " and djtext[i+1] == " "):
                a = a + char

    params = {'purpose': purpose, 'analyzed_text': a}

    return render(request, "analyze.html", params)
