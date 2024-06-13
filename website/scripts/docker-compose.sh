#!/bin/bash

DIRETORIO_ENV=../.resources/environments/docker-compose.env
DIR_POM=pom.xml
KEY_VERSION='${WEBSITE_VERSION}'


## Ler a versão do arquivo pom.xml e atualiza variavél de ambiente
VALUE_VERSION=$(xmllint --xpath '/*[local-name()="project"]/*[local-name()="version"]/text()' "$DIR_POM")
sed -i 's,'"$KEY_VERSION"','$VALUE_VERSION',' "$DIRETORIO_ENV"

mvn clean install -P build -DskipTests
docker compose --env-file $DIRETORIO_ENV up -d --build --force-recreate
