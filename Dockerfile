from node:10-alpine

workdir /app

copy . .

run yarn

cmd yarn start

expose 3000
