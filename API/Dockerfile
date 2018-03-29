# define which image to build form
# using latest stable image 'carbon'
# comes with node and npm installed
FROM node:carbon

# create working directory, relative to root
WORKDIR /Users/elvingranat/Docker/node-app

# install app dependencies through:
# copying package_lock.json and package.json to working directory
# only copying these files initially to take advantage of cached Docker layers
# running npm install, viable through node:carbon
COPY package*.json ./

# if development
RUN npm install

# if production
# RUN npm install --only=production

# bundle source code from project to working directory
COPY . .

# since app binds to port 8080, have it mapped by docker daemon using:
EXPOSE 8080

# command to run application using CMD which defined runtime
CMD ["npm", "start"]


# Docker commands (in order of usage):

#####################################################
# navigate to folder holding Dockerfile in terminal #
#####################################################

## To build image:
# $ docker logout (to avoid autharization issues)
# $ docker remove <image id> (remove old image with same name if exists)
# $ docker build -t <your username>/node-app .

## To see image:
# $ docker images

## To run image process (-p sets external and internal port, to access outside use 8081)
# $ docker run -p 8081:8080 -d <your username>/node-app

## Get container/process ID:
# $ docker ps

## To stop image process
# $ docker kill <container id, only a few characters required, not entire id>

## Print app output
# $ docker logs <container id>

## Enter container
# $ docker exec -it <container id> /bin/bash