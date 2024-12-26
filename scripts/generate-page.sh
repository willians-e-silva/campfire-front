#!/bin/bash

# Gera o componente
ng generate component pages/$npm_config_name

# Renomeia os arquivos gerados para adicionar o sufixo 'page'
for file in src/app/pages/$npm_config_name/*; do
  if [[ "$file" == *.component.ts ]]; then
    mv "$file" "${file%.component.ts}.page.ts"
  elif [[ "$file" == *.component.html ]]; then
    mv "$file" "${file%.component.html}.page.html"
  elif [[ "$file" == *.component.spec.ts ]]; then
    mv "$file" "${file%.component.spec.ts}.page.spec.ts"
  elif [[ "$file" == *.component.scss ]]; then
    mv "$file" "${file%.component.scss}.page.scss"
  fi
done

# Substitui os textos dentro dos arquivos
for file in src/app/pages/$npm_config_name/*; do
  sed -i "s/$npm_config_name\.component/$npm_config_name\.page/g" "$file"
  sed -i "s/app-$npm_config_name/page-$npm_config_name/g" "$file"
  
  # Substitui LoginComponent por LoginPage
  # capitalized_name="$(tr '[:lower:]' '[:upper:]' <<< ${npm_config_name:0:1})${npm_config_name:1}"
  # sed -i "s/${capitalized_name}Component/${capitalized_name}Page/g" "$file"
done