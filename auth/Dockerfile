FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps


COPY . .

EXPOSE 5000

CMD ["node" ,"server.js"]
