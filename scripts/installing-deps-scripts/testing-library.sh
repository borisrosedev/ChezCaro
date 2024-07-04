#!/bin/bash 

install_testing_library_deps(){

    npm install -save-dev @testing-library/dom @testing-library/user-event @testing-library/jest-dom

    npm install node-fetch@v2

}

install_testing_library_deps