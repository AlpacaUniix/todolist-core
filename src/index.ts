import { createApp } from 'app'
import { dataSource } from 'dataSource'
import { HOST, NODE_ENV, PORT } from './config'

const connect: () => void = () =>
  dataSource
    .initialize()
    .catch((err) => {
      console.error(err)
      setTimeout(() => connect(), 3000)
    })

connect()

const app = createApp()

app.listen(PORT, HOST, () =>
  console.info(
    `${
      NODE_ENV || 'Development'
    } server started, listening on http(s)://${HOST}:${PORT}`
  )
)