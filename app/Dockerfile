FROM node:12-alpine

# Update packages
RUN apt-get -q update && \
    apt-get -qy dist-upgrade && \
    apt-get clean

# Set the Working directory
WORKDIR /srv

# Copy our package.json over and install dependencies
COPY package.json /srv/package.json
RUN yarn install

# Default Command
CMD ["yarn", "start"]
