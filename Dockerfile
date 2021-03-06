FROM node:9

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install --silent

COPY . /usr/src/app

EXPOSE 4200

CMD ["npm", "run", "start-container"]