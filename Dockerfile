FROM node:18-alpine AS development

WORKDIR /app

COPY package*.json /app/
COPY tsconfig.json /app/

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]


FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json /app/

RUN npm install --production

COPY . .

RUN npm run build

FROM nginx:1.23-alpine as production

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]