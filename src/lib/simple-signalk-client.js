import objectPath from 'object-path'
import superagent from 'superagent'

const ENDPOINT = 'http://192.168.21.200:3000/signalk/v1/api/'
let TREE = null
let TIMESTAMP = 0

export default {
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

      // setTimeout(() => {
      //   const data = {
      //     vessels: {
      //       'urn:mrn:signalk:uuid:c0d79334-4e25-4245-8892-54e8ccc8021d': {
      //         navigation: {
      //           courseOverGroundTrue: {
      //             value: 3.609864491899872,
      //             timestamp: '2017-08-31T09:36:29.000Z',
      //             sentence: 'VTG'
      //           }
      //         }
      //       }
      //     },
      //     name: 'Volare',
      //     self: 'urn:mrn:signalk:uuid:c0d79334-4e25-4245-8892-54e8ccc8021d',
      //     sources: {}
      //   }

      //   TREE = data
      //   TIMESTAMP = Date.now()
      //   resolve(data)
      // }, 500)
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
