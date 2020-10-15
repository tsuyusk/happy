const productionConfig = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  database: './dist/database/database.sqlite',
  migrations: ['./dist/database/migrations/*.js'],
  entities: ['./dist/models/*.js'],
  cli: {
    migrationsDir: './dist/database/migrations',
  },
};

const localConfig = {
  type: 'sqlite',
  database: './src/database/database.sqlite',
  migrations: ['./src/database/migrations/*.ts'],
  entities: ['./src/models/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};

module.exports =
  process.env.NODE_ENV === 'production' ? productionConfig : localConfig;
