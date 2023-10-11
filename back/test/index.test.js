const {server} = require('../src/app');
const session = require('supertest');
const request = session(server);

describe('Test de rutas', () => {

    describe('GET /rickandmorty/character/:id', () => {

        it('Responds with status:200', async () => {

            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });

        it('Responds an object with the properties: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const expectedProps = ["id", "name", "species", "gender", "status", "origin", "image"];
            const response = await request.get('/rickandmorty/character/1');

            expectedProps.forEach(property => {
                expect(response.body).toHaveProperty(property);
            });
        });

        it('If there is an error respond with status: 500', async () => {
            const response = await request.get('/rickandmorty/character/900');
            expect(response.statusCode).toBe(500);
        });
    });


    describe('GET /rickandmorty/login', ()=>{
        it('Respond with an object with the access prop set to true if the credentials are correct', async()=>{
            const response = await request.get('/rickandmorty/login?email=eje@cosa.com&password=12345678a');

            expect(response.body).toEqual({ access: true });
        });

        it('Respond with an object with the access prop set to false if the credentials are incorrect', async()=>{
            const response = await request.get('/rickandmorty/login?email=eje@cossa.com&password=12678a');

            expect(response.body).toEqual({ access: false });
        });
    });

    describe('POST /rickandmorty/fav', ()=>{
        it('What is sent by body must be returned in an array',async()=>{
            const character={
                id: 888,
                name: 'Subject',
                status: 'Alive',
                gender: 'Male',
                species: 'Human',
                origin: { name: 'c 137' },
                image: 'image.jpg'
            }

            const response = await request.post('/rickandmorty/fav').send(character);
            expect(Array.isArray(response.body)).toBeTruthy();
            expect(response.body).toContainEqual(character);

        });

        it('Responds with an array with the previously sent objects and the new ones:', async ()=>{
            const character={
                id: 18,
                name: 'Subject',
                status: 'Unknow',
                gender: 'Unknow',
                species: 'Alien',
                origin: { name: 'c 137' },
                image: 'image.jpg'
            }

            const response = await request.post('/rickandmorty/fav').send(character);
            
            expect(response.body.length).toBe(2);
        });
    });

    describe('DELETE /rickandmorty/fav/:id', () => {
        it('Respond with an array of unchanged objects if the submitted id is not found as a favorite', async () => {
            const response = await request.delete('/rickandmorty/fav/90000');
            expect(response.body.length).toBe(2);
        });

        it('Responds with an array with the objects except the one whose id was requested to be deleted', async () => {
            const response = await request.delete('/rickandmorty/fav/18');
            expect(response.body.length).toBe(1);
        });
    });

});
