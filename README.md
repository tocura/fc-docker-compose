# fc-docker-compose
Docker compose study using node, nginx and mysql

The proxy will act as a reverse proxy and when receive a request the nginx will call our node application.

The node application on the other hand will insert a name into our table `people` in mysql.

## ⚙ How to run
- Run the command `docker-compose up -d`
- Access the port :8080 in your browser to see our custom nginx index file