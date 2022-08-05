export default class BookStoreService {
  _books = [
    {
      id: 1,
      title: "Harry Poter 1",
      author: "J. Rowling",
      price: 45,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/71NFcRl66bL.jpg",
    },
    {
      id: 2,
      title: "We'll Always Have Summer (The Summer I Turned Pretty)",
      author: "Jerry Hann",
      price: 55,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/81BBAyv-CJL.jpg",
    },
    {
      id: 3,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      price: 18,
      coverImage:
        "https://m.media-amazon.com/images/M/MV5BMTJmNGJmYTgtYjAxNy00YmMzLTk2YTYtMGIzMmUwNDMyMTY1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    },
  ];

  getBooks() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          rej(new Error("I am so sorry but you have a error"));
        } else {
          res(this._books);
        }
      }, 1000);
    });
  }
}
