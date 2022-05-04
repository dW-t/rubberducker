FROM node:17.7.2

ENV LANG=C.UTF-8
ENV APP=/app
WORKDIR ${APP}

COPY ./frontend/rubberducker ${APP}
RUN npm install
