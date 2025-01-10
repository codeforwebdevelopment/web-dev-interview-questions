A modular web server for rapid full-stack development support HTTP, HTTPS, and HTTP2. it is a simple command-line HTTP server. This tool is for serving local files. you can easily set up this with node.js. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.

install node.js first

How to use http-server to serve static files with node

To serve our built application site we just need to serve the dist folder. For example, if using python we could simply run python -m SimpleHTTPServer from the dist folder and view the application from python -m http.server

localhost:8000

0.0.0.0:8000  


C:\http-server 
Starting http-server
Available on:
http:192.168.0.5:8080
http:127.0.0.1:8080
 Hit CTRL-C to stop

http-server ./dist/path of build

Another package

npm i live-server -g

>live-server .

https://dashboard.ngrok.com/get-started/tutorials

An SSL cert or way to have an HTTPS connection

