#!/bin/bash

# Function to run apt update, upgrade, and install nodejs and npm
update_vm() {
    apt update -y
    apt upgrade -y
    curl -s https://deb.nodesource.com/setup_18.x | sudo bash -
    apt install -y nodejs
}

# Call the function

# install dependencies
deps() {
    npm install
}

# build
build() {
    npm run build
}

# start the server
start() {
    node .output/server/index.mjs
}


# run the function based on arg
case $1 in
    update)
        update_vm
        ;;
    deps)
        deps
        ;;
    build)
        build
        ;;
    start)
        start
        ;;
    *)
        echo "Invalid argument"
        ;;
esac