FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- RUNTIME STAGE ----------
FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy only compiled output
COPY --from=builder /app/dist ./dist
COPY package*.json ./

# Install ONLY production deps
RUN npm ci --omit=dev

CMD ["node", "dist/config/server.js"]
