FROM node:lts AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN mv .env.prod .env
RUN npm run build


FROM node:lts-alpine
RUN apk --no-cache add curl
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3002
CMD ["npm", "run", "start:prod"]
