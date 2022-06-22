<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Configuration
That boilerplate uses [NestJS](https://nestjs.com/), node.js framework as a backend and the persistence layer is made with [Neo4J](https://neo4j.com/), graph database. Before run the boilerplate with `npm`, we have to set up few things:
## Add configuration file
When we clone the repository, we cannot find the database credentials because that variables, have to be **private**. Add the development environment credentials (`development.yml`) following that commands. *That file has to have the same interface as `utils/environment/internaces/environment.interface.ts`*
```bash
cd src
mkdir config/environment
vim config/environment/development.yml
```
## Start docker container
You can create in `Neo4J Desktop` the database but in that case, we are going to spin up a docker container and access it from the desktop (`localhost:7474`) in remote way. Also possible from `Neo4J Desktop`. Get the docker-compose file from [docker.templates](https://github.com/tipogi/docker.templates) and fill up with your database credentials.
**IMPORTANT:** The docker image that we use in that case, it is free one so database `name` and `username` has to be *neo4j*
```bash
# Create docker network
docker network create sandbox-network
```

## Ready?
If your configuration is ready, start the development server:
```bash
npm run start:dev
```