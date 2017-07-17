from django.shortcuts import render


def homepage(request):
    return render(request, 'c3dpwebpage/index_main.html', {})
