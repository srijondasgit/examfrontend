FROM node:12-alpine3.14
WORKDIR /examfrontend/exammodule
COPY package.json /examfrontend/exammodule
COPY package-lock.json /examfrontend/exammodule
RUN npm ci --only=production && npm cache clean --force
COPY . /examfrontend/exammodule
CMD PORT=3002 npm start
EXPOSE 3002
