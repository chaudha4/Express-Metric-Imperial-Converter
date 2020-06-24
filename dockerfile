# Followed intructions at https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

# specify the node base image with your desired version node:<version>
#FROM node:12
FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source. Create a .dockerignore file in the same directory as your Dockerfile
# and include folders that don't need to be copied. e.g. node_modules
COPY . .

# replace this with your application's default port
EXPOSE 3000

# we will use node server.js to start your server
CMD [ "node", "server.js" ]

# To build "sudo docker build -t chaudha4/metric-imp-converter ."

# Check that image is created "docker images"

# Run using "sudo docker run -p 80:3000 -d chaudha4/metric-imp-converter"

# Test using "curl -i localhost:80"

# Get logs using "sudo docker logs container_id". Use "sudo docker ps" to get id.

# Stop container using "sudo docker stop container_id"

# Share it with others by "sudo docker save chaudha4/metric-imp-converter > my_shared_image.tar"

# Shared images can be restored on any other env by "sudo docker load < my_shared_image.tar"