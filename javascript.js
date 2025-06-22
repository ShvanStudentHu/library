const newDiv = document.createElement("div");
document.body.append(newDiv);

const bookCard = () => {
  const divCard = newDiv.cloneNode(true);
  document.body.append(divCard);
  const text = document.createTextNode("hi");
  divCard.append(text);
};

const mylibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const addBookToLibrary = (name, author, pages, read) => {
  const bookName = new Book(name, author, pages, read);
  mylibrary.push(bookName);
};

addBookToLibrary("Gehectheid in Psychotherapie", "David J. Wallin", 255, true);
addBookToLibrary("Shvan is Awsome", "Shvan Yakana", 1023, true);
addBookToLibrary("f*ck I", "D.M", 1, false);

this.askInfo = function (type) {
  const bookInfo = this.type;
  return bookInfo;
};

const books = () => {
  mylibrary.forEach((object) => {
    bookCard();
  });
};

const removeBook = (bookName) => {
  mylibrary.forEach((object) => {
    if (bookName === object.name) {
      mylibrary.splice(mylibrary.indexOf(object), 1);
    }
  });
};

//   this.displayInfo = function () {
//     const info = `${this.name}, ${this.author}, ${this.pages}, ${this.read}`;
//     return info;
//   };

Book.prototype.displayInfo = function () {
  const info = `${this.name}, ${this.author}, ${this.pages}, ${this.read}`;
  return info;
};

// const holdMeTight = new Book("Houd me vast", "sue Johansson", "200", true);
// mylibrary.push(holdMeTight);
