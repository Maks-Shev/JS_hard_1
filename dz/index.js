const musicCollection = [
        {
            title: "The Dark Side of the Moon",
            artist: "Pink Floyd",
            year: "1973"
          },
          {
            title: "Abbey Road",
            artist: "The Beatles",
            year: "1969"
          },
          {
            title: "Thriller",
            artist: "Michael Jackson",
            year: "1982"
          }
    ];


musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
            ? { done: false, value: musicCollection[this.current++] } 
            : { done: true }
        }
    }
};

for (let album of musicCollection) {
    console.log(`Название: ${album.title}, Исполнитель: ${album.artist}, Год: ${album.year}`);
}