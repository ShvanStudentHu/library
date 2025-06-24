const newDiv = document.createElement("div");
document.body.append(newDiv);

const addGlobalEventListner = (type, selector, callback) => {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
};

const bookCard = () => {
  const divCard = newDiv.cloneNode(true);
  document.body.append(divCard);

  divCard.setAttribute("class", "card");
  const text = document.createTextNode("item");
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
  document.getElementById("form").setAttribute("style", "display:grid;");
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

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const [bookName, author, pages, read] = [
    "aname",
    "auth",
    "bookpages",
    "read",
  ].map((key) => formData.get(key));

  console.log(bookName, author, pages, read);
});
