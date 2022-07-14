FROM node:18

WORKDIR /usr/src

COPY  package*json ./

COPY . .

RUN npm install 

EXPOSE 3000

CMD ["npm", "start"]