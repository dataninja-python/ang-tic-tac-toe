# Dockerfile
FROM node:latest

# Install Angular CLI
RUN npm install -g @angular/cli

# Set the working directory
WORKDIR /app

# Set the entrypoint to a shell
ENTRYPOINT ["/bin/bash"]
