FROM node:17.7.2

ENV LANG=C.UTF-8
ENV APP=/app
COPY ./frontend/rubberducker ${APP}/frontend
WORKDIR ${APP}/frontend

RUN npm install
