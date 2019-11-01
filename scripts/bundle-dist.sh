#!/bin/bash

mkdir -p ./dist
mkdir -p ./dist/assets
cp ./build/*.css ./dist
cp ./build/*.html ./dist
cp -r --exclude=*.sketch ./build/assets/* ./dist/assets
find ./build -mindepth 2 -maxdepth 5 -type d -not -empty -exec cp {} ./dist \;