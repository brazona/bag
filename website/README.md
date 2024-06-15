# WEBSITE

## Esboço

localhost: ``` npm run start ```

dockercompose: ``` npm run docker-compose ```

kubectl_localhost: ``` kubectl apply -f deployment-run.yml ```


bash .github/workflows/scripts/prepare-manifest.sh website/env.txt website/deployment.yml website/deployment-run.yml 0.0.1-snapshot-9
