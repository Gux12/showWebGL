"""showWebGL URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from home import views as home_views
from car1 import views as car1_views
from car2 import views as car2_views
from car3 import views as car3_views
from cloth1 import views as cloth1_views
from cloth2 import views as cloth2_views
from cloth3 import views as cloth3_views
from sheep1 import views as sheep1_views
from sheep2 import views as sheep2_views
from cloth import views as cloth_views
from car import views as car_views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^home/$', home_views.index),
    url(r'^home/smart_chain', home_views.get_smart_chain),
    url(r'^car1/', car1_views.index),
    url(r'^car2/', car2_views.index),
    url(r'^car3/', car3_views.index),
    url(r'^cloth1/', cloth1_views.index),
    url(r'^cloth2/', cloth2_views.index),
    url(r'^cloth3/', cloth3_views.index),
    url(r'^sheep1/', sheep1_views.index),
    url(r'^sheep2/', sheep2_views.index),
    url(r'^cloth/', cloth_views.index),
    url(r'^car/', car_views.index),
]
