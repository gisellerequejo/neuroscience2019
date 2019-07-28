import os
from .secrets import SECRET_KEY

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ALLOWED_HOSTS = ['52.7.120.250', '127.0.0.1']
DEBUG = True

ROOT_URLCONF = "core.urls"

INSTALLED_APPS = [
 "django.contrib.staticfiles",
 "core",
]

TEMPLATES = [{
 "BACKEND": "django.template.backends.django.DjangoTemplates",
 "APP_DIRS": True,
}]

MIDDLEWARE = []

SECURE_SSL_REDIRECT = True

STATIC_URL = '/assets/'
STATIC_ROOT = os.path.abspath(f"{BASE_DIR}/../assets")
SASS_PROCESSOR_ROOT = os.path.abspath(f"{BASE_DIR}/core/static")




