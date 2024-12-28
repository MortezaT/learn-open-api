#!/bin/bash

docker compose up --build api_generator

# cd "$(dirname "$0")"

src="./.generated/api/build"
dest="./apps/client/src/api/generated"

rm -rf "$dest/*"
mkdir -p $dest
cp $src/**.ts $dest