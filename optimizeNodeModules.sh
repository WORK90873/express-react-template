find ./client/node_modules -name "*.md" -type f -delete
find ./client/node_modules -name "LICENSE" -type f -delete
find ./client/node_modules -name "license" -type f -delete
find ./client/node_modules -name "licence" -type f -delete
find ./client/node_modules -type d -name "test" -exec rm -rf "{}" \;
find ./client/node_modules -type d -name "example" -exec rm -rf "{}" \;
find ./client/node_modules -type d -name "examples" -exec rm -rf "{}" \;


find ./api/node_modules -name "*.md" -type f -delete
find ./api/node_modules -name "LICENSE" -type f -delete
find ./api/node_modules -name "license" -type f -delete
find ./api/node_modules -name "licence" -type f -delete
find ./api/node_modules -type d -name "test" -exec rm -rf "{}" \;
find ./api/node_modules -type d -name "example" -exec rm -rf "{}" \;
find ./api/node_modules -type d -name "examples" -exec rm -rf "{}" \;