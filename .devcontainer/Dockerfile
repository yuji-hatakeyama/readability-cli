FROM node:18-slim
RUN apt update && apt install -y git curl jq

WORKDIR /workspace
COPY ./package*.json ./
RUN npm ci
