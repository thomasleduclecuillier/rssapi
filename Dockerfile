FROM node:12.16.1-alpine3.11

COPY . /home/node
WORKDIR /home/node

RUN npm install

CMD ["node", "index.js"]
