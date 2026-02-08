# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:alpine
# Copy hasil build Astro (folder dist) ke folder default Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Copy custom nginx config jika perlu (opsional)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]