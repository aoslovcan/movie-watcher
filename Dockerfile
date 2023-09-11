# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the React app
RUN npm run build

# Expose the port your app will run on (typically 3000 for React apps)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
