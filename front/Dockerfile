# Указываем базовый образ, например, node
FROM node:18-alpine

# Устанавливаем pnpm
RUN npm install -g pnpm

# Создаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и pnpm-lock.yaml в контейнер
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости через pnpm
RUN pnpm install

# Копируем все файлы проекта в контейнер
COPY . .

# Собираем проект
RUN pnpm build

# Открываем порт (например, 5173, если используете стандартный порт Vite)
EXPOSE 5173

# Запускаем Vite dev server
CMD ["pnpm", "dev", "--host"]