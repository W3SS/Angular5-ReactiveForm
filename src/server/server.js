const express = require('express');
const app = express();
// const cors = Headers;
const cors = require('cors')
// new Headers()
// app.all('/*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });
app.use(cors());
app.get('/', (req, res) => {
    res.json('hello world');
})

app.get('/about', (req, res) => {
    res.json('About us');
})

app.listen(3000, () => { console.log('server is running on 3000') })
