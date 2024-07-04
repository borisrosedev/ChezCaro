#!/bin/bash

install_typescript_deps(){
    npm install --save-dev typescript
    npm install --save-dev @typescript-eslint/parser
    npm install --save-dev @typescript-eslint/eslint-plugin
}

install_typescript_deps