const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = async (req, res) => {

    const id = req.params.id;

    try {
        const data = (await axios(`${URL}/${id}`)).data;
        const character = {
            id,
            name: data.name,
            origin: data.origin,
            status: data.status,
            gender: data.gender,
            species: data.species,
            location: data.location,
            image: data.image
        }
        return res.status(200).json(character);
    } catch (error) {
        throw Error(error.message);
    }

}
module.exports = getCharById;

