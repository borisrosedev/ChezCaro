#!/bin/bash

install_webpack_deps(){
    npm install webpack webpack-cli --save-dev
    #npm install webpack-dev-server --save-dev

    #---------------LOADER------------------
    npm install css-loader style-loader ts-loader babel-loade vue-loader --save-dev

    #---------------PLUGINS------------------
    npm install copy-webpack-plugin html-webpack-plugin --save-dev
    #npm install file-loader --save-dev

}

install_webpack_deps