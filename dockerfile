FROM node:20-bookworm

LABEL Mauricio Oliveda maurioliveda@gmail.com

RUN echo 'python3 --version'

RUN mkdir -p /home/node/web-api/node_modules && chown -R node:node /home/node/web-api

WORKDIR /home/node/web-api

# COPY package.json ./

USER node

# RUN yarn install

COPY --chown=node:node . .

EXPOSE 3500

CMD ["yarn","app"]