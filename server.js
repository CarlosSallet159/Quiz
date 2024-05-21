const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Novo cliente conectado');

    ws.on('message', (message) => {
        console.log(`Recebido: ${message}`);
    
        ws.send(`Você disse: ${message}`);
    });

    ws.on('close', () => {
        console.log('Cliente desconectado');
    });

    ws.send('Bem-vindo ao servidor WebSocket!');
});

console.log('Servidor WebSocket está rodando em ws://localhost:8080');