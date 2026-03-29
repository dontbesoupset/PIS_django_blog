# -*- coding: utf-8 -*-
from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Главная страница -> функция archive
    url(r'^$', 'articles.views.archive', name='archive'),
    
    # Админка
    url(r'^admin/', include(admin.site.urls)),
)