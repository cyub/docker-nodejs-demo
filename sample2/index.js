const hapi = require('hapi');
const mongoose = require('mongoose');
const Painting = require('./models/Painting');
const os = require("os");
const server = hapi.server({
    port: 4000,
    host: '0.0.0.0'
});

mongoose.connect('mongodb://mongo:27017/hapi');
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

const init = async () => {
    server.route([{
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            return `<h1>hello world from ${os.hostname()}</h1>`;
        }
    },
    {
        method: 'GET',
        path: '/api/v1/paintings',
        handler: function (request, reply) {
            return Painting.find();
        }
    },{
        method: 'POST',
        path: '/api/v1/paintings',
        handler: function (request, reply) {
            const { name, url, techniques } = request.payload;
            const paintings = new Painting({
                name,
                url,
                techniques
            });

            return paintings.save();
        }
    }])
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();


















