import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'postgres',
  host:'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: ['src/models/*.ts'],
  migrations: [],
  subscribers: [],
  logging: true,
  synchronize: true
})