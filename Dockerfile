from node:10-alpine

workdir /app

copy . .

run npm i

cmd npm start