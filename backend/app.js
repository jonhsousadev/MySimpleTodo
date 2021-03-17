const express = require('express')
const app = express()
const port = process.env.port

app.get('/', (req, res) => {
    res.send('Hello MySimpleTodo!');
})


app.listen(port, () => {
    console.log(`Your app is running on port ${port}`)
})