FROM node:21.1.0


WORKDIR /D-App

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1080

CMD [ "node", "server.js" ]


