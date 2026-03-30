# -*- coding: utf-8 -*-
from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Главная страница 
    url(r'^$', 'articles.views.archive', name='archive'),
    
    # Страница одной статьи 
    url(r'^article/(?P<article_id>\d+)/$', 'articles.views.get_article', name='get_article'),
    
    # Админка
    url(r'^admin/', include(admin.site.urls)),
)