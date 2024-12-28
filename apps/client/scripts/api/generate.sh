openapi-generator-cli generate \
    -i http://api/docs-json \
    -g typescript-axios \
    -o /local/build \
    -p=useSingleRequestParameter=true

rm -rf /local/generated/*
mkdir -p /local/generated
mv /local/build/**.ts /local/generated