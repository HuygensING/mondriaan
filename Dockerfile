FROM nginx:1.11.8-alpine

RUN apk add --no-cache --update openssl
RUN rm -rf /var/cache/apk/*

RUN mkdir -p /etc/nginx/ssl
RUN openssl req \
    -batch \
    -days 365 \
    -keyout /etc/nginx/ssl/nginx.key \
    -newkey rsa:2048 \
    -nodes \
    -out /etc/nginx/ssl/nginx.crt \
    -x509

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html/build/
COPY index.html /usr/share/nginx/html/
COPY node_modules/react /usr/share/nginx/html/node_modules/react/
COPY node_modules/react-dom /usr/share/nginx/html/node_modules/react-dom/
