#os

FROM node:22-alpine AS builder


WORKDIR /app


COPY package*.json ./


RUN npm ci


#install ke baad build krte hai for simple frontend

COPY . .

RUN npm run build



#STAGE 2

FROM nginx:alpine


COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]



