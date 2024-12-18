# On clone le dépot !
git clone https://github.com/ftuncq/sym_numbers.git

# On se déplace dans le dossier
cd sym_numbers

# On installe les dépendances !
composer install

# On modifie le fichier .env
DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=8.0.32&charset=utf8mb4"

# On créé la base de données
php bin/console doctrine:database:create

# On exécute les migrations
php bin/console doctrine:migrations:migrate

# On exécute la fixture
php bin/console doctrine:fixtures:load --no-interaction

# On lance le serveur
php bin/console server:run ou symfony serve
