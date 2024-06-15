#!/bin/bash

DIRETORIO_ENV=../.resources/environments/docker-compose.env
DIR_POM=pom.xml
KEY_VERSION=WEBSITE_VERSION

## Ler a versão do arquivo pom.xml e atualiza variavél de ambiente
VALUE_VERSION=$(xmllint --xpath '/*[local-name()="project"]/*[local-name()="version"]/text()' "$DIR_POM")

## Ler arquivo .env e atualiza variaveis de ambiente
while read -r line || [[ -n "$line" ]];
do
  varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
  varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')

  if [ $varname = $KEY_VERSION ]; then
    find=$varname=$varvalue
    replace=$varname=$VALUE_VERSION
    sed -i 's,'$find','$replace',' "$DIRETORIO_ENV"
  fi
done < $DIRETORIO_ENV

mvn clean install -P build -DskipTests
docker compose --env-file $DIRETORIO_ENV up -d --build --force-recreate
