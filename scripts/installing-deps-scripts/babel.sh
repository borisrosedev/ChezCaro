#!/bin/bash

install_babel_deps(){

    npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-react
    npm install --save-dev @babel/eslint-parser
}

install_babel_deps