'use strict'

function handleRejection(p) {
    return p.catch((error)=>({
        error
    }))
}

function waitForAll(...ps) {
    console.log('started...')
    return Promise.all(ps.map(handleRejection))
}

module.exports = {
    'waitForAll': waitForAll
}