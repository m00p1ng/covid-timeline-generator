require('dotenv').config({ path: '.env.development' });

module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: ['src/**/*.entity.{js,ts}'],
  migrations: ['src/database/migrations/*.{js,ts}'],
  cli: {
    entitiesDir: ['src/**/*.entity.{js,ts}'],
    migrationsDir: 'src/database/migrations',
  }
};
