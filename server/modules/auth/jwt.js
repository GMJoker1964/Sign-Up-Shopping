const jwt = require('jsonwebtoken')

let SECRET_STRING ='my secret string'

function signToken(payload){
    let token = jwt.sign(payload,SECRET_STRING, {expiresIn:'12h'})//expiresIn hiệu lực token
    return token
}

function verifyToken(token){
    let payload = jwt.verify(token, SECRET_STRING)
    return payload
}

module.exports ={
    signToken, verifyToken
}