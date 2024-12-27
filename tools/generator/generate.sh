openapi-generator-cli generate \
    -i http://todo-api:3001/docs-json \
    --generator-name typescript-axios \
    -o /local/build \
    --additional-properties=useSingleRequestParameter=true