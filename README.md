# Frontend application with injected environment variables

## How to use

    docker build -t demo .
	
    docker run -d -e APP_NAME=app1 -e MY_NODE_NAME=nodeName -e MY_POD_NAME=podName -e MY_POD_NAMESPACE=podNamespace -e MY_POD_IP=podIp -e MY_POD_SERVICE_ACCOUNT=podAcc -p 8080:80 demo

Visit http://localhost:8080 to see the result.

## Author
emabel

## variables
# APP_NAME 
# MY_NODE_NAME
# MY_POD_NAME
# MY_POD_NAMESPACE
# MY_POD_IP
# MY_POD_SERVICE_ACCOUNT