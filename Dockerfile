FROM node:9

WORKDIR /app

ADD index.js /app

EXPOSE 8888

CMD node index.js
