const request = require('supertest');
const app = require('../src/server');

it('respond with Welcome to my API', done => {
    request(app)
        .get('/')
        .set('Acept','aplication/json')
        .expect('Content-Type',/json/)
        .expect(200,done)

})