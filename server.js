const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

// Servir arquivos estáticos (opcional)
app.use(express.static('public'));

// Criar um servidor HTTP
const server = http.createServer(app);

// Criar um servidor WebSocket
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Cliente conectado');

    // Enviar uma mensagem para o cliente
    ws.send('Bem-vindo ao servidor WebSocket!');

    // Receber mensagens do cliente
    ws.on('message', (message) => {
        console.log(`Mensagem recebida: ${message}`);
        // Enviar a mensagem de volta para o cliente
        ws.send(`Você disse: ${message}`);
    });

    ws.on('close', () => {
        console.log('Cliente desconectado');
    });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
