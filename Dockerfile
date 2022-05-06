FROM node:17.0

WORKDIR /plan-it

COPY package*.json ./

COPY package-lock*.json ./

RUN npm install

COPY . ./

CMD [ "npm", "start" ]