import 'dotenv/config'

export const CORS_ORIGIN = process.env.CORS_ORIGIN || '*'
export const HOST = process.env.HOST || 'localhost'
export const NODE_ENV = process.env.NODE_ENV
export const PORT = parseInt(process.env.PORT || '4000', 10)
export const ENVIRONMENT = process.env.ENVIRONMENT || 'test'
export const IS_DEV = NODE_ENV !== 'production'

