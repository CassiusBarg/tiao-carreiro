FROM php:8.2-cli

# Instala extensões necessárias do PHP + netcat
RUN apt-get update && apt-get install -y \
    git unzip libpng-dev libjpeg-dev libfreetype6-dev netcat-traditional \
    && docker-php-ext-install pdo pdo_mysql gd

# Define a pasta de trabalho
WORKDIR /var/www/html

# Copia todos os arquivos do Laravel para dentro do container
COPY . .

# Instala o Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && rm composer-setup.php

# Instala dependências do Laravel
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Gera a chave da aplicação
RUN php artisan key:generate || true

# Expõe a porta do servidor embutido
EXPOSE 8000

# Sobe o servidor Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]

