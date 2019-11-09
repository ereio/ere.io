#!/bin/bash

rm -r ./dist
mkdir -p ./dist
mkdir -p ./dist/assets
cp -R ./build/assets/* ./dist/assets 
cp ./build/*.css ./dist
cp ./build/*.html ./dist
cp ./build/*.ico ./dist
cp ./build/manifest.json ./dist 
find ./build -mindepth 1 -maxdepth 5 -type d -not -empty -exec cp -r {} ./dist \;