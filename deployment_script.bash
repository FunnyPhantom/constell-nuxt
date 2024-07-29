#!/bin/bash

# Function to run apt update, upgrade, and install nodejs and npm
update_vm() {
    apt update -y
    apt upgrade -y
    curl -s https://deb.nodesource.com/setup_18.x | sudo bash -
    apt install -y nodejs
    apt install nginx -y
    apt install certbot python3-certbot-nginx -y
}

# configure nginx
config_nginx() {
    # cp nginx.conf to /etc/nginx/nginx.conf
    cp nginx.conf /etc/nginx/nginx.conf
    # copy constell.movahedmanesh.com file to /etc/nginx/sites-available
    cp nginx-confs/constell.movahedmanesh.com /etc/nginx/sites-available/constell.movahedmanesh.com
    # create a symbolic link to /etc/nginx/sites-enabled
    ln -s /etc/nginx/sites-available/constell.movahedmanesh.com /etc/nginx/sites-enabled/
    # remove the default file
    rm /etc/nginx/sites-enabled/default
    # restart nginx
    systemctl restart nginx
}

# certbot
certbot() {
    # Obtain and install certificate 
    # does this way work with /sites-available/constell.movahedmanesh.com?
    sudo certbot --nginx -d constell.movahedmanesh.com
    sudo certbot renew --dry-run
    (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
}

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

start_background() {
    # run the proces without being dependent on the terminal and without redirecting the outputs into a local file named logs.txt
    nohup node .output/server/index.mjs > ./logs.txt 2>&1 &
}


# run the function based on arg
case $1 in
    update)
        update_vm
        ;;
    config)
        config_nginx
        ;;
    certbot)
        certbot
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
    start_background)
        start_background
        ;;
    all_in_one)
        update_vm
        echo "[INFO] VM updated"
        config_nginx
        echo "[INFO] Nginx configured"
        certbot
        echo "[INFO] Certbot configured"
        deps
        echo "[INFO] Dependencies installed"
        build
        echo "[INFO] Build completed"
        start_background
        echo "[INFO] Server started"
        ;;
    *)
        echo "Invalid argument"
        ;;
esac