import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'postgres',
  entities: [
    process.env.NODE_ENV === 'production'
      ? 'build/model/*.js'
      : 'src/model/*.ts',
  ],
  migrations: [
    process.env.NODE_ENV === 'production'
      ? 'build/migrations/*.js'
      : 'src/migrations/*.js',
  ],
  migrationsRun: true,
  subscribers: [
    process.env.NODE_ENV === 'production'
      ? 'build/subscribers/*.js'
      : 'src/subscribers/*.ts',
  ],
  logging: false,
})