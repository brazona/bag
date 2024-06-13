DIRETORIO_ENV=../.resources/environments/docker-compose.env

mvn clean install -P build -DskipTests
docker compose --env-file $DIRETORIO_ENV up -d --build --force-recreate
