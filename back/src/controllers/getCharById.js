const axios = require("axios");

function getCharById(req, res) {

    const id = req.params.id;
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    axios.get(url)
        .then((axiosResponse) => {
            const {id, name, image} = axiosResponse.data;
            //console.log('controllers',axiosResponse.data)
            res
                .status(200)
                .json(axiosResponse.data);

        })
        .catch((error) => {
            res
                .writeHead(500, { "Content-type": "text/plain" })
                .end(error.message)
        })
}
module.exports = getCharById;

