
import express, { json, urlencoded } from 'express'
import router from './routes'
import errorHandler from './errorHandler'
import cors from "cors";

export const createApp = () => {
    const app = express()
    app.use(json())
    
    app.set("trust proxy", true);

    app.use(urlencoded({ extended: true,limit: "5mb"}))
    app.use(cors());
    app.use(router)
    app.use(errorHandler);
    return app
}