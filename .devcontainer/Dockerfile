FROM node:18-slim
RUN apt update && apt install -y git

WORKDIR /workspace
COPY ./package*.json ./
RUN npm ci
