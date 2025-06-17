# Imagen base con Node.js
FROM node:22.12.0-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto 4200
EXPOSE 4200

# Comando por defecto: iniciar el servidor de desarrollo de Angular
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "4200"]
