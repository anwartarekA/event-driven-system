# Use official Node.js LTS image as base
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json separately (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app source code
COPY . .

# Expose the port your app listens on (change if needed)
EXPOSE 3000

# Start the app
CMD ["node", "src/index.js"]