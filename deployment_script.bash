#!/bin/bash

# Function to run apt update, upgrade, and install nodejs and npm
update_vm() {
    apt update -y
    apt upgrade -y
    apt install nodejs npm -y
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
