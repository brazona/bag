#!/bin/bash
##bash scripts/prepare-manifest.sh ../.resources/environments/dev.env
DIR_MANIFEST_RUN=deployment-run.yml
DIR_MANIFEST_TEMP=deployment.yml
ENV_TEMP=env.txt

rm -rf $DIR_MANIFEST_RUN
rm -rf $ENV_TEMP

if [ $# -gt 0 ]; then
   DIRETORIO_ENV=$(echo $1)
else
    echo "Parâmentro: DIRETORIO_ENV, é obrigatório";
    exit 1
fi
## Extrai valor do arquivo env e salva num arquivo temporário
echo $(cat $DIRETORIO_ENV) >> $ENV_TEMP
## Subistitui espaço por newline
sed -i 's/\s\+/\n/g' $ENV_TEMP
## Gera manifesto com base no template
cp  $DIR_MANIFEST_TEMP $DIR_MANIFEST_RUN
## Exporta as variaveis de ambiente do arquivo temporário
export $(grep -v '^#' $ENV_TEMP | xargs) && env
rm -rf $ENV_TEMP
## Substitui os valores do arquivo .env para o manisfesto temporário
envsubst < $DIR_MANIFEST_TEMP > $DIR_MANIFEST_RUN

