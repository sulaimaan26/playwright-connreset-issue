const http = require('http');
let i = 0;
const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.url} - Terminating connection.`);
    if (i > 0) {
        i = 0;
        console.log(`In hello ${i}`);
        res.end("Hello");
        return;
    }
    i++;
    console.log(`Throwing error`);
    // .destroy() closes the underlying socket immediately without sending 
    // any data or a proper TCP FIN packet, causing ECONNRESET on the client.
    req.socket.destroy();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    console.log('Any request to this server will trigger an ECONNRESET error.');
});
