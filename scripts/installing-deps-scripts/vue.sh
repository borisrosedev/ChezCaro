#!/bin/bash

install_vue(){
    npm install -S vue
    npm install -D vue-template-compiler 
    npm install -D vue-loader@next @vue/compiler-sfc 

}

install_vue