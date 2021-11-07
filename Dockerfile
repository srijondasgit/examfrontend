FROM node:12-alpine3.14
WORKDIR /elearning-core
COPY package.json /elearning-core
COPY package-lock.json /elearning-core
RUN npm ci --only=production && npm cache clean --force
COPY . /elearning-core
CMD npm start
EXPOSE 3001
