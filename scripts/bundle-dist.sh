#!/bin/bash

rm -r ./dist
mkdir -p ./dist 
cp ./build/*.css ./dist
cp ./build/*.html ./dist
cp ./build/*.ico ./dist
cp ./build/manifest.json ./dist 
find ./build -mindepth 1 -maxdepth 1 -type d -not -empty -exec cp -R {} ./dist \; 