const addGlobalEventListner = (type, selector, callback) => {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
};

addGlobalEventListner("click", "#btn", (e) => {
  document.getElementById("form").setAttribute("style", "display:none;");
  console.log("FIRE", e.target);
});

addGlobalEventListner("click", ".add-book", (e) => {
  books();
});

addGlobalEventListner("click", ".delete", (e) => {
  removeBook(e.target.value);
  console.log(e.target);
});

// let book = {
//   bookName: bookName,
//   author: author,
//   pages: pages,
//   read: read,
// };

const createElement = (element) => {
  const newElement = document.createElement(element);
  return newElement;
};

const addStylingClass = (target, classToAdd) => {
  target.classList.add(classToAdd);
};

const insertToParent = (child, parent) => {
  parent.appendChild(child);
};

const createDeleteButton = (newDiv, bookName) => {
  const newButton = createElement("button");
  newDiv.append(newButton);
  newButton.setAttribute("class", "delete");
  newButton.value = bookName;
  newButton.textContent = "x";

  return newButton;
};

const insertBookInfo = (book, newDiv) => {
  const attributes = ["Name:", "Author:", "Pages:"];
  const bookInfo = [book.name, book.author, book.pages, book.read];

  for (let i = 0; i < 3; i++) {
    const insertParagraph = document.createElement("p");
    insertParagraph.textContent = `${attributes[i]} ${bookInfo[i]}`;
    newDiv.append(insertParagraph);
  }
};

const createReadButton = (readStatus, newDiv) => {
  const newButton = document.createElement("button");
  if (!readStatus) {
    newButton.textContent = "unread";
  } else {
    newButton.textContent = "read";
  }
  newDiv.append(newButton);
  newButton.setAttribute("class", "toggle-read");
};

const bookCard = (book) => {
  const main = document.querySelector(".main");
  const newDiv = createElement("div");
  insertToParent(newDiv, main);
  addStylingClass(newDiv, "card");
  createDeleteButton(newDiv, book.name);
  insertBookInfo(book, newDiv);
  createReadButton(book.read, newDiv);
};

const mylibrary = [];

function Book(name, author, pages, read) {
  this.uuid = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const addBookToLibrary = (name, author, pages, read) => {
  if (read === "true") {
    read = true;
  } else {
    read = false;
  }
  const bookName = new Book(name, author, pages, read);
  bookCard(bookName);
  mylibrary.push(bookName);
};

// addBookToLibrary("Gehectheid in Psychotherapie", "David J. Wallin", 255, true);
// addBookToLibrary("Shvan is Awsome", "Shvan Yakana", 1023, true);
// addBookToLibrary("f*ck I", "D.M", 1, false);

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

  addBookToLibrary(bookName, author, pages, read);
});
