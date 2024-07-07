#!/bin/bash 


install_cypress_deps(){

    npm install cypress @types/cypress --save-dev
    npm install @cypress/webpack-preprocessor --save-dev

}

install_cypress_deps