# docker container run --rm -v /home/nicolas/Prez/CapDuLibre/Slides:/app:rw -p "80:8080" -d --name cap  prez:cap
FROM node:8.8-alpine

EXPOSE 3000 8080

RUN mkdir -p /app

VOLUME /app

WORKDIR /app

RUN npm install -g yarn \
    webpack webpack-dev-server \
    react react-dom react-mirror && \
    yarn add --dev babel-core babel-loader \
    babel-preset-react \
    babel-preset-es2015 \
    node-sass css-loader \
    sass-loader style-loader \
    cross-env rimraf

CMD webpack-dev-server --hot --inline --progress --host 0.0.0.0
