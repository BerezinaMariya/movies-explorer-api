const SALT_ROUND = 10;
const SECRET_KEY = 'some-very-very-secret-key';

const MONGO_BASE = 'mongodb://127.0.0.1:27017/bitfilmsdb';

const CORS_OPTIONS = {
  origin: [
    'http://localhost:3000',
    'http://movies-explorer.berez.nomoredomains.club',
    'https://movies-explorer.berez.nomoredomains.club',
    'https://movies-explorer-yandex-diploma.onrender.com',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

module.exports = {
  SALT_ROUND,
  SECRET_KEY,
  MONGO_BASE,
  CORS_OPTIONS,
};
