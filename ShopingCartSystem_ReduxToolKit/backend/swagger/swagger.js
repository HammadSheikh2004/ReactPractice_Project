import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Cart System API',
    description: 'Auto generated Swagger docs',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = '../swagger/swagger-output.json';
const routes = ['../src/app.js']; // entry file

swaggerAutogen()(outputFile, routes);