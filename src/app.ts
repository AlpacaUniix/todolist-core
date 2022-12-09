
import express, { json, urlencoded } from 'express'
import router from 'routes'

export const createApp = () => {
    const app = express()
    app.use(json())
    app.use(urlencoded({ extended: true}))
    app.use(router)
    return app
}

