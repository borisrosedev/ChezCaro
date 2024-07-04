#!/bin/bash
compile_java(){
    javac CreateFile.java
    java CreateFile $1
}

compile_java $1