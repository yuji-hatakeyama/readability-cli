FROM node:18-slim
WORKDIR /workspace
COPY ./package*.json ./
RUN npm ci

COPY src src
ENTRYPOINT ["node", "src/cli.js"]
