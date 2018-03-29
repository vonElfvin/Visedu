# define which image to build from
# comes with nodejs, npm and yarn
FROM gcr.io/google_appengine/nodejs

# install correct node version
RUN install_node 'v9.8.0'

# bundle source code from project to app
COPY . /app/

# if development
RUN npm install --unsafe-perm

# if production
# RUN npm install --unsafe-perm --only=production

# EXPOSE 8080

CMD ["npm", "start"]

### Docker commands:

## To build image:
# $ docker logout (to avoid autharization issues)
# $ docker remove <image id> (remove old image with same name if exists)
# $ docker build -t <your username>/node-app .

## To see image:
# $ docker images

## To run image process
## -p sets external and internal port, to access outside use 8081
## -d deattaches the process
# $ docker run -p 8081:8080 -d <your username>/node-app

## Get container/process ID:
# $ docker ps

## To stop image process
# $ docker kill <container id, only a few characters required, not entire id>

## Print app output
# $ docker logs <container id>

## Enter container
# $ docker exec -it <container id> /bin/bash