FROM gcr.io/google_appengine/nodejs

RUN install_node 'v9.8.0'

COPY . /app/

RUN npm install --unsafe-perm

CMD npm start
