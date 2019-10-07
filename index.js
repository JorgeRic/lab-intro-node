class SortedList {
  constructor (items, length) {
    this.items = []
    this.length = 0
  }

  add (item) {
    this.items[this.length] = item
    this.items.sort((a, b) => (a - b))
    this.length++
  }

  get (pos) {
    return this.items[pos - 1]
  }

  max () {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      this.items.sort((a, b) => (b - a))
      return this.items[0]
    }
  }

  min () {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      this.items.sort((a, b) => (a - b))
      return this.items[0]
    }
  }

  sum () {
    if (this.length === 0) {
      return 0
    } else {
      this.items.reduce(function (a, b) {
        return a + b
      })
    }
  }

  average () {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      this.items.reduce(function (a, b) {
        return a + b / this.length
      })
    }
  }
};

module.exports = SortedList
