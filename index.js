const express = require('express')
const app = express();

app.listen(3030)

app.get('/', (req, res) => {
res.status('401')
})
