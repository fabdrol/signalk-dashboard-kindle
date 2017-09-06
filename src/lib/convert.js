export default {
  position: (deg, lng) => {
    let d = parseInt(deg, 10)
    let minfloat = Math.abs((deg - d) * 60)
    let m = Math.floor(minfloat)
    let secfloat = (minfloat - m) * 60
    let s = Math.round(secfloat)
    d = Math.abs(d)

    if (s === 60) {
        m += 1
        s = 0
    }
    if (m === 60) {
        d += 1
        m = 0
    }

    return `${d}° ${m}' ${s}" ${deg < 0 ? lng ? 'W' : 'S' : lng ? 'E' : 'N'}`
  },

  msToKts: (n) => {
    if (isNaN(parseFloat(n))) {
      return 0
    }

    if (typeof n !== 'number') {
      n = parseFloat(n)
    }

    return n * 1.94384449
  },

  radToDeg: (n) => {
    if (isNaN(parseFloat(n))) {
      return 0
    }

    if (typeof n !== 'number') {
      n = parseFloat(n)
    }

    return n * (180 / Math.PI)
  },

  kelvinToCelsius: (n) => {
    if (isNaN(parseFloat(n))) {
      return 0
    }

    if (typeof n !== 'number') {
      n = parseFloat(n)
    }

    return (n - 273.15)
  }
}
