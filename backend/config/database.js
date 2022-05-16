const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST'),
      port: env('DATABASE_PORT'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
      database: env('DATABASE_NAME'),
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
