from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import permissions, status, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token 
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializer import UserSerializer


class LoginVista(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = authenticate(username=username, password=password)

        if user is not None:
            
            token, _ = Token.objects.get_or_create(user=user)
            return Response(
                {
                    "token": token.key,  # La "pulsera" de acceso
                    "is_superuser": user.is_superuser,
                    "username": user.username,
                    "id": user.id,
                },
                status=status.HTTP_200_OK,
            )

        return Response(
            {"msg": "Datos no validos, reingresa tus datos o registrate"},
            status=status.HTTP_400_BAD_REQUEST,
        ) 

class RegistroVista(APIView):
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if User.objects.filter(username=username).exists():
            return Response({"existe":True, "msg": "Nombre de usuario no disponible, intenta con otro"}, status = status.HTTP_400_BAD_REQUEST)
        else:
            User.objects.create_user(username=username, password=password)
            return Response({"Codigo":"Usuario creado exitosamente", "msg": "Iniciando sesion "}, status = status.HTTP_200_OK)


class AdminUsersVista(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [
        TokenAuthentication
    ]
    permission_classes = [permissions.IsAdminUser]
