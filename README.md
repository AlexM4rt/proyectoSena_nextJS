## Para iniciar hay que tener python django y el framework rest_framework instalado

instalar python

https://www.python.org/downloads/

instalar django

py -m pip install Django

instalar el framework rest

pip install djangorestframework
pip install markdown # Markdown support for the browsable API.
pip install django-filter

correr el servidor

python manage.py runserver

ir a http://127.0.0.1:8000/

crear usuario con derechos de administrador para poder acceder a la ventana de admin
python manage.py createsuperuser

ingresar un correo un nombre de usuario y una contrasena

luego en el frontend ingresar a la pagina de admin para ver los usuarios creados y que derechos tienen,
registrarse como usuario normal para ver la diferencia

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started con el frontend

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun  run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
