const express= require('express');
const app = express();
const db = require('./models');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.1',
  info: { // API informations (required)
    title: 'Auth Service', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'Auth API' // Description (optional)
  },
  // host: 'localhost:4000', // Host (optional)
  basePath: '/', // Base path (optional)
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'X-API-KEY',
      }
    }
  },
  security: [{
    ApiKeyAuth: []
  }]
};

// Options for the swagger docs
const options = {
  // Import swaggerDefinitions
  swaggerDefinition,
  // Path to the API docs
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

dotenv.config();
db.sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true, // 쿠키를 자바스크립트에서 접근 불가능하게 함
    secure: false, // https를 쓸 때 true
  },
  name: 'express-mysql',
}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', express.static('public'));
app.use('/api/test', require('./routes/test'));

app.listen(4000, () => {
    console.log('Express listening on port', 4000);
});