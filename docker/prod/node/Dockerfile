ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine

# Set up work directory
WORKDIR /var/www/client

# Configure host
ENV HOST 0.0.0.0

ENV NODE_OPTIONS="--max-old-space-size=1024"

# Init command
ENV NODE_OPTIONS=--openssl-legacy-provider
# CMD ["sh", "-c", "npm install && npm run build && npm run start"]
CMD ["sh", "-c", "npm install && npm run generate"]
