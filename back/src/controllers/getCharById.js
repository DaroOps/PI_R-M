const axios = require("axios");

function getCharById(response, id) {

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((axiosResponse) => { 
            const{name, image, gender, species, status, origin}= axiosResponse.data;

            response
            .writeHead(200, { "Content-type": "application/json" })
            .end(JSON.stringify({id, name, image, gender, species, status, origin}));
            
        })
        .catch((error) => {
            response
            .writeHead(500, { "Content-type": "text/plain"})
            .end(error.message)

        })
}
module.exports =getCharById ;