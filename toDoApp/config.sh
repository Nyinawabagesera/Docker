#!/bin/bash

#  build app
npm run build

# Docker login
docker login

# Build Docker image
 docker build -t vite-react-app:latest .

# Run Docker container 
# docker run -p 8080:8080 vite-react-app:latest

# Tag Docker image
docker tag vite-react-app:latest jacky272/todoapp:latest

# Push Docker image to Docker Hub
docker push jacky272/todoapp:latest

# Pull Docker image from Docker Hub
docker pull jacky272/todoapp:latest

# Run Docker container with pulled image
docker run -p 8080:8080 jacky272/todoapp:latest
# By Chriss Copy My Code At Your Own Risk