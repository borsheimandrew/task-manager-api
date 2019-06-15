const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// Create server and set port to Heroku or Localhost
const app = express()
const port = process.env.PORT

// Set server to parse json
// Add routers
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Start Server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

