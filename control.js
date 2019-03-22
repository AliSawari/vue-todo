const { fork, execSync } = require('child_process')
const app = require('express')()

app.post('/payload', (req, res) => {
  execSync('git pull')
  restartServer()
  res.status(200).send()
})

function restartServer() {
  console.log("Restarting Server")
  serverProcess.kill()
  serverProcess = fork('server.js')
}

var serverProcess = fork('server.js')

app.listen(4545)
