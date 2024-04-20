# simple-kafka-browser
Small application for browsing kafka clusters


## Starting application:
Require java 11 or newer.

### Installation
Download simple-kafka-browser.bar.gz and unpack it.
For linux run bin/start.sh.
For windows run /bin/start.sh using gitbash or similar

You can also run application simple by "java -jar kafka-browser*.jar" command

### Accessing application

Open browser and go to http://localhost:17511
By default application run on 17511 port.
Should run fine on any modern browser.

### Configuration
application.properties:
- client.id : kafka consumer / admin client id used by application (default "skb-client") 
- server.port : port on which application will be running (default "17511")
- environments.file.path : path to file containing each cluster definition (default "environments.json")
- connection.pool.size : connection pool used for accessing kafka broker (default "10")

environment.json:
Information about each cluster in json format:
```
[
  {
    "name": "local-environment", - name used to identify cluster, must be unique
    "bootstrapServer": "localhost:9092", - address to one kafka broker from cluster
	  "isModifiable":true - if set to true allow deleting consumer group and topics from that cluster
  },
  {
    "name": "other-environment",
    "bootstrapServer": "some-environment:9092",
	  "isModifiable":false
  }
]
```

## Features:
### Topics overview
![](readme-files/topic-list.PNG)
![](readme-files/topic-overview.gif)
### Consumer group overview
![](readme-files/consumer-group-list.PNG)
![](readme-files/consumer-group-overview.gif)
### Support multiple clusters
![](readme-files/multi-cluster.gif)
### Connections between consumer group and topics
![](readme-files/topic-consuer-connection.gif)
### Removal of consumer groups and topics
![](readme-files/delete-topic.gif)

## Known issues
- Poor error handling
- Server may not reconnect to kafka cluster when connection is lost
- Navigation between cluster can fail

