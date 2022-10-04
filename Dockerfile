FROM node:alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY rollup.config.js ./
COPY src ./src
COPY src/21.png ./21.png

RUN npm run build

FROM nginx:alpine AS server

WORKDIR /usr/share/nginx/html
RUN apk add --no-cache gettext
COPY nginx-entrypoint.sh /
COPY --from=builder /app/dist ./
COPY src/21.png ./21.png

ENTRYPOINT [ "sh", "/nginx-entrypoint.sh" ]
