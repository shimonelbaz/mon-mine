const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

console.log('WebSocket server running on ws://localhost:3000');

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        const stats = JSON.parse(message);
        console.log(`Hash Rate: ${stats.hashRate} H/s, Total Hashes: ${stats.totalHashes}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
