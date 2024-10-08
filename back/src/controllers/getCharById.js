const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = async (req, res) => {

    const id = req.params.id;

    try {
        const data = (await axios(`${URL}/${id}`)).data;
        if(data.id){

            const character = {
                id,
                name: data.name,
                origin: data.origin,
                status: data.status,
                gender: data.gender,
                species: data.species,
                location: data.location,
                image: data.image
            };

            return res.status(200).json(character);
        }
        return res.status(404).send('Not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }

}
module.exports = getCharById;

