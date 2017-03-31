# 'The Mondrian Papers' client

## Development
- $ npm install
- $ npm run watch
- Open new terminal.
- $ npm run server
- The default browser is pointed to http://localhost:3000.

## Docker
- $ npm run dist
- $ docker build &lt;name&gt;:&lt;tag&gt; .
- $ docker run --rm -p 8080:80 -p 8081:443 &lt;name&gt;:&lt;tag&gt;
- View site at http://localhost:8080 or https://localhost:8081

