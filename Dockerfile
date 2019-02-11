from node:10-alpine

workdir /app

copy . /app

cmd yarn && yarn start

expose 3000
