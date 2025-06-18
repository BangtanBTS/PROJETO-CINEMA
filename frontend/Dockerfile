# Etapa 1: build do React com Vite
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: servir os arquivos com Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
