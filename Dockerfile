# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular frontend
RUN npm run build --prefix apps/web

# Expose the port the application will run on
EXPOSE 3000

# Start the NestJS backend
CMD ["npm", "run", "start:prod", "--prefix", "apps/api"]
