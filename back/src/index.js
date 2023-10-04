const http = require('http');
const data = require('./utils/data');
const url = require('url');



http.createServer((request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');

    if (request.url.includes('/rickandmorty/character/')) {

        
        const urlParts = request.url.split('/');
        const id = Number(urlParts[3]);
        
        
        const character = data.find((character) => character.id === id);
        response
            .writeHead(200, { "Content-type": "application/json" })
            .end(JSON.stringify(character));
    
    }
    else {
        response
            .writeHead(404, { "Content-type": "application/json"})
            .end(JSON.stringify({ error: "no se especificó una ruta o la ruta indicada no existe " }))
    }
}).listen(3001, '127.0.0.1');
