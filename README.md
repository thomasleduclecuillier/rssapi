# RSS API

## Description

Local service that send aggregate sports rss feeds from thre providers. It stores these data into a database and update them every two hours.

## Setup

It can be use with docker and the following commands :

```shell
docker build -f Dockerfile -t rssapi:0.1.0 .
```

```shell
docker-compose up
```

Replace the value of the environment variable MONGO_URL in docker-compose.yml with the good one to reach the mongo container. Use the command :

```shell
docker network inspect rssapi_default
```

And search for the value of the "IPv4Address" field of the rssapi_mongo_1 container.