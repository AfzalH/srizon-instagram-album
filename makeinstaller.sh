#!/usr/bin/env bash
mkdir srizon-instagram-album
cp -R ./admin ./srizon-instagram-album/
rm -R ./cache/*
cd ./cache
touch index.html
cd ../
cp -R ./cache ./srizon-instagram-album/
cp -R ./languages ./srizon-instagram-album/
cp -R ./lib ./srizon-instagram-album/
cp -R ./resources ./srizon-instagram-album/
cp -R ./site ./srizon-instagram-album/
cp -R ./tmpl ./srizon-instagram-album/

cp ./readme.txt ./srizon-instagram-album/
cp ./srizon-instagram-album.php ./srizon-instagram-album/

zip -r srizon-instagram-album.1.0.zip srizon-instagram-album

rm -R srizon-instagram-album