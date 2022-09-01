const express = require("express")
const app = express()
const port = 5000

app.get("/api", (req, res) => {
  res.json({ "users": [1, 2, 3] })
})
app.listen(port, ()=> { console.log(`App listening on port ${port}`)})
