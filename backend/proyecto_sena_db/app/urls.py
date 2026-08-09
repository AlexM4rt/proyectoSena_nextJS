from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import AdminUsersVista, LoginVista, RegistroVista


router = DefaultRouter()
router.register(
    r"admin_user_view", AdminUsersVista, basename="admin_user_view"
)

urlpatterns = [
    path("login/", LoginVista.as_view(), name="login"),
    path("registro/", RegistroVista.as_view(), name="registro"),
    path("", include(router.urls)),
]