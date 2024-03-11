# Use the official Node.js image as parent image
FROM node:16

# Set the working directory. If it doesn't exists, it'll be created
WORKDIR /app

# Define the env variable `PORT`
ENV PORT 8085

# Expose the port 3000
EXPOSE ${PORT}
# Set the MONGO_URI environment variable
#ENV MONGODB_URI='mongodb://host.docker.internal:27017/mydatabase'
ENV MONGODB_URI='mongodb://host.docker.internal:27017/mydatabase'


# Copy the file `package.json` from current folder
# inside our image in the folder `/app`
# COPY ./package.json /app/package.json
COPY package*.json /app

# Install the dependencies
RUN npm install

# Copy all files from current folder
# inside our image in the folder `/app`
COPY .. /app

# Start the app
ENTRYPOINT ["npm", "start"]