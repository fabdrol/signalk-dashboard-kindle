export default {
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
  }
}
