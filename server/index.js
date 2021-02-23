require('./connect-mongo')
const express= require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const cors = require('cors')
const path = require('path')
const multiparty = require("multiparty");
const fs = require("fs");

const app = express()
const port = 9000
const STATIC_PATH = path.resolve(__dirname, '../build')
const STATIC_IMAGE_PATH = path.resolve(__dirname, '../public/images')
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(router)

app.use('/', express.static(STATIC_PATH))
app.use('/public/images',express.static(STATIC_IMAGE_PATH))

app.post("/upload", (req, res, next) => {
    console.log(req)
    let form = new multiparty.Form();
    try {
        form.parse(req, (err, fields, data) => {
            if (!data) {
                res.send(err)
        return next()
            }
            let files = data.files
            let currentTime = new Date().getTime();
            let {path: tempPath} = files[0];
            let extention = files[0].originalFilename.split('.').pop()

            if (!fs.existsSync(STATIC_IMAGE_PATH)){
                fs.mkdirSync(STATIC_IMAGE_PATH);
            }
            let copyToPath = STATIC_IMAGE_PATH + "/" + currentTime + "." + extention;
            fs.readFile(tempPath, (err, data) => {
                fs.writeFile(copyToPath, data, (err) => {
                    res.json({file: "/public/images/" + currentTime + "." + extention});
                });
            });
        })
    } catch (err) {
        res.send(err)
        next()
    }
        
})

app.use((err, req, res, next) => {
    let message = err.message
    let stack = err.stack
    res.status(400)
        .json({message,stack})
})

app.listen(port, (err) => console.log(err || 'Server open at port ' + port))