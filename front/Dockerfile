FROM node:18

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm install

EXPOSE 5173

CMD [ "npm", "run", "dev" ]