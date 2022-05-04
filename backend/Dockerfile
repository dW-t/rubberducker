FROM node:17.7.2

ENV LANG=C.UTF-8
ENV APP=/app
COPY ./backend/rubberducker ${APP}/backend
WORKDIR ${APP}/backend

RUN npm install
