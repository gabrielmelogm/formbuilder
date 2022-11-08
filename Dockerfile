FROM node:16-alpine AS BUILDER

RUN apk add --no-cache libc6-compat bash

WORKDIR /app

COPY package*.json yarn*.lock ./

RUN npm i

COPY . .

RUN chmod +x .docker/entrypoint.sh

ENV NEXT_TELEMETRY_DISABLED 1