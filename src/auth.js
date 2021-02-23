const TOKEN_EXP = 12 * 59 * 60 * 1000
const AUTH_DATA_KEY = 'auth_data'

function saveAuth(data) {
    if(!data) return
    if(!data.validTo) {
        let now = Date.now()
        let validTo = now + TOKEN_EXP
        data.validTo = validTo
    }
    localStorage.setItem(AUTH_DATA_KEY, jsonStr(data))
}

function loadAuth() {
    let data = jsonObj(localStorage.getItem(AUTH_DATA_KEY))
    if(data instanceof Object && data.accessToken && data.validTo >= Date.now()) {
        return data
    }
    return null
}

function clearAuth() {
    return localStorage.removeItem(AUTH_DATA_KEY)
}

function jsonStr(data) {
    return JSON.stringify(data)
}

function jsonObj(str) {
    try {
        return JSON.parse(str)
    } catch (error) {
        return null
    }
}

export {
    saveAuth,
    loadAuth,
    clearAuth
}