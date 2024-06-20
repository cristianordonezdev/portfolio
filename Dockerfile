# Usa una imagen base de Node.js
FROM node:16.13.2-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5173 for the development server
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev"]