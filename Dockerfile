# Use a lightweight Node.js image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy build folder
COPY build ./build

# Install `serve` to serve static files
RUN npm global add serve

# Expose the port and define the command to run the app
EXPOSE 8080
CMD ["serve", "-s", "build", "-l", "8080"]
