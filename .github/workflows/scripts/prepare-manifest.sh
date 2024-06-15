#!/bin/bash
if [ $# -eq 4 ]; then
   DIRETORIO_ENV=$(echo $1)
   DIR_MANIFEST_IN=$(echo $2)
   DIR_MANIFEST_OUT=$(echo $3)
   DOCKER_IMAGE_TAG=$(echo $4)
else
    echo "Parâmentro: DIRETORIO_ENV, é obrigatório";
    echo "Parâmentro: DIR_MANIFEST_IN, é obrigatório";
    echo "Parâmentro: DIR_MANIFEST_OUT, é obrigatório";
    echo "Parâmentro: DOCKER_IMAGE_TAG, é obrigatório";
    echo -e "Exemplo:\nbash .github/workflows/scripts/prepare-manifest.sh site/env.txt site/deployment.yml site/deployment-temp.yml 0.0.1-snapshot-9";
    exit 1
fi
echo "Paramentros"
echo $DIRETORIO_ENV
echo $DIR_MANIFEST_IN
echo $DIR_MANIFEST_OUT
echo $DOCKER_IMAGE_TAG
echo $(cat $DIRETORIO_ENV)
## Extrai valor do arquivo env e salva num arquivo temporário
#echo $(cat $DIRETORIO_ENV) >> $DIRETORIO_ENV
## Subistitui espaço por newline
sed -i 's/\s\+/\n/g' $DIRETORIO_ENV
find='$$$TAG'
sed -i 's,'"$find"','$DOCKER_IMAGE_TAG',' $DIRETORIO_ENV
#sed -i 's,"$TAG",'$DOCKER_IMAGE_TAG',' $DIRETORIO_ENV
## Gera manifesto com base no template
rm -rf $DIR_MANIFEST_OUT
cp  $DIR_MANIFEST_IN $DIR_MANIFEST_OUT
## Exporta as variaveis de ambiente do arquivo temporário
export $(grep -v '^#' $DIRETORIO_ENV | xargs) && env
## Substitui os valores do arquivo .env para o manisfesto temporário
envsubst < $DIR_MANIFEST_IN > $DIR_MANIFEST_OUT

