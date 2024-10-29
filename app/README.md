# BAG APPLICATION

## Esboço

```sh
#DB Docker Compose

docker-compose -f docker-compose-db.yml --env-file ../.resources/environments/.env up -d --build --force-recreate 
```

```sh
#KEYCLOAK Docker Compose

docker-compose -f docker-compose-keycloak.yml --env-file ../.resources/environments/.env up -d --build --force-recreate 
```