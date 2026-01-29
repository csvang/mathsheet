FROM node:lts-alpine

WORKDIR /var/www/worksheets

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]