FROM node:8-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for productionf
# RUN npm install --only=production
RUN mkdir dist
COPY dist/. dist/.
COPY --from=gcr.io/kaniko-project/executor:v0.7.0 /kaniko /kaniko

EXPOSE 3000
CMD [ "npm", "start" ]
