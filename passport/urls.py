from . import views
from django.urls import path

urlpatterns = [
    path('', views.HomePage.as_view(), name='home'),
    path('login_success/', views.LoginSuccess, name='login_success'),
    path('add_enrolled_pupil/', views.AddEnrolledPupil.as_view(), name='add_enrolled_pupil'),
    path('enrolled_pupil_list/', views.EnrolledPupilList.as_view(), name='enrolled_pupil_list'),
    path('<int:pupil_id>/', views.EnrolledPupilRecord.as_view(), name='enrolled_pupil_record'),
]