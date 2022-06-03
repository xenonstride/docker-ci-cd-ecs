FROM node:alpine
WORKDIR /usr/app
COPY . .
RUN npm ci
CMD ["npm", "run", "start"]