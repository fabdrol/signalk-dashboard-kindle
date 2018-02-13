import objectPath from 'object-path'
import superagent from 'superagent'

// const ENDPOINT = 'http://192.168.21.200:3000/signalk/v1/api/'
// const ENDPOINT = 'http://172.20.10.2:3000/signalk/v1/api/'
let ENDPOINT = ''
let TREE = null
let TIMESTAMP = 0

export default {
  testConnection (endpoint) {
    ENDPOINT = `${endpoint}/signalk/v1/api/`
    return this._head()
  },

  getSelf () {
    if (TREE === null || (Date.now() - TIMESTAMP) > 1000) {
      return this._fetch().then(() => this.getSelf())
    }

    return this.getVessel(TREE.self)
  },

  getVessel (key) {
    if (TREE !== null && (Date.now() - TIMESTAMP) <= 1000) {
      return Promise.resolve(new Cursor(TREE.vessels[key]))
    }

    return this._fetch().then(() => this.getVessel(key))
  },

  _head () {
    return new Promise((resolve, reject) => {
      superagent
        .head(ENDPOINT)
        .timeout({ response: 1000, deadline: 5000 })
        .end((err, response) => {
          if (err) {
            console.log(`[simple-signalk-client] Error in HEAD request: ${err.message}`)
            return resolve(false)
          }

          if (response.statusCode !== 200 && response.statusCode !== 204) {
            console.log(`[simple-signalk-client] Invalid status code: ${response.statusCode}`)
            return resolve(false)
          }

          if (response.ok !== true) {
            console.log(`[simple-signalk-client] Response is not ok`)
            return resolve(false)
          }

          resolve(true)
        })
    })
  },

  _fetch () {
    return new Promise((resolve, reject) => {
      superagent
        .get(ENDPOINT)
        .end((err, response) => {
          if (err) {
            console.log(`[simple-signalk-client] error fetching data: ${err.message}`)
            return reject(err)
          }

          if (response.statusCode !== 200) {
            console.log(`[simple-signalk-client] error unexpected response code: ${response.statusCode}`)
            return reject(new Error(`Unexpected response code: ${response.statusCode}`))
          }

          if (response.ok !== true) {
            console.log(`[simple-signalk-client] error response is not OK`)
            return reject(new Error(`Response is not OK`))
          }

          TREE = response.body
          TIMESTAMP = Date.now()
          resolve(response.body)
        })
    })
  }
}

class Cursor {
  constructor (data) {
    this.data = (data && typeof data === 'object') ? data : {}
  }

  get (path) {
    const data = objectPath.get(this.data, path)
    return Promise.resolve(data)
  }
}
