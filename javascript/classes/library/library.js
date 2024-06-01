class Media {
  constructor (title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title
  }

  get isCheckedOut() {
    return this.isCheckedOut
  }

  get ratings() {
    return this.ratings
  }

  getAverageRating() {
    if (this._ratings != []) {
      let sum = 0
      for (let i = 0; i < this._ratings.length; i++) {
        sum += this._ratings[i]
      }
      return sum / this._ratings.length
    } else {
      return 'This has not yet been rated!'
      }
    }
  
  toggleCheckOutStatus() {
  this._isCheckedOut = !this._isCheckedOut;
}

  addRating(number) {
    this._ratings.push(number)
  }
  }

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
}

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._artist = artist;
  }
}
