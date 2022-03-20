FROM node:17.7.2

ENV LANG=C.UTF-8
ENV APP=/app
RUN mkdir -p ${APP}/node_modules
WORKDIR ${APP}

COPY ./front/rubberducker/package*.json ${APP}/

RUN chown -R node:node ${APP}
RUN chown -R node:node ${APP}/node_modules
USER node

RUN npm install

COPY ./front/rubberducker ${APP}