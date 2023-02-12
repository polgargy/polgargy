include .env

#-----------------------------------------------------------
# Docker
#-----------------------------------------------------------

# Wake up docker containers
up:
	docker-compose up -d

# Shut down docker containers
down:
	docker-compose down

# Show a status of each container
status:
	docker-compose ps

# Status alias
s: status

# Show logs of each container
logs:
	docker-compose logs

# Watch client output
logs-c:
	docker logs -f ${CLIENT_CONTAINER}

# Restart all containers
restart: down up

# Restart the client container
restart-client:
	docker-compose restart client

# Restart the client container alias
rc: restart-client

# Show the client logs
logs-client:
	docker-compose logs client

# Show the client logs alias
lc: logs-client

# Build and up docker containers
build:
	docker-compose up -d --build

# Build containers with no cache option
build-no-cache:
	docker-compose build --no-cache

# Build and up docker containers
rebuild: down build

# Run terminal of the client container
c:
	docker-compose exec client /bin/sh


#-----------------------------------------------------------
# Logs
#-----------------------------------------------------------

# Clear file-based logs
logs-clear:
	sudo rm docker/${DOCKER_ENV}/nginx/logs/*.log

#-----------------------------------------------------------
# Dependencies
#-----------------------------------------------------------

# Update npm dependencies
npm-update:
	docker-compose exec client npm update

# Show npm outdated dependencies
npm-outdated:
	docker-compose exec npm outdated

#-----------------------------------------------------------
# Clearing
#-----------------------------------------------------------

# Shut down and remove all volumes
remove-volumes:
	docker-compose down --volumes

# Remove all existing networks (useful if network already exists with the same attributes)
prune-networks:
	docker network prune
