FROM node:18-slim
WORKDIR /workspace
COPY ./package*.json ./
RUN npm ci

COPY src src
ENTRYPOINT ["src/cli.js"]
