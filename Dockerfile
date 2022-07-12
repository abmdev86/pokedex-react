FROM node:18


WORKDIR /src

COPY . .

RUN npm i 

CMD ["npm", "start"]

EXPOSE 8080
