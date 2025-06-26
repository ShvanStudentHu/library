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
  const buttonPress = e.target;
  const closestDiv = buttonPress.closest("div");
  const uuid = closestDiv.getAttribute("data");
  removeBook(uuid);
  closestDiv.remove();
});

const catchElement = (element) => document.body.querySelector(element);

const createElement = (tag) => document.createElement(tag);

const addStylingClass = (target, classToAdd) => {
  target.classList.add(classToAdd);
};
const insertToParent = (child, parent) => parent.appendChild(child);

const setHtmlAttribute = (parent, atrribute, value) =>
  parent.setAttribute(atrribute, value);

const createDeleteButton = (newDiv) => {
  //refactor this to add data-uuid for deletion later
  const newButton = createElement("button");

  insertToParent(newButton, newDiv);
  addStylingClass(newButton, "delete");
  insertText(newButton, "x");

  return newButton;
};

const insertText = (target, text) => {
  target.textContent = text;
};

const insertBookInfo = (book, newDiv) => {
  // future upgrade: capatilize labels dynamically, or make them localizable
  const fields = [
    { label: "Name:", value: book.name },
    { label: "Author:", value: book.author },
    { label: "Pages:", value: book.pages },
  ];

  fields.forEach((field) => {
    const paragraph = createElement("p");
    paragraph.textContent = `${field.label} ${field.value}`;
    insertToParent(paragraph, newDiv);
  });
};

const createReadButton = (readStatus, newDiv) => {
  const newButton = createElement("button");
  insertText(newButton, readStatus ? "read" : "unread");
  insertToParent(newButton, newDiv);

  addStylingClass(newButton, "toggle-read");
};

const bookCard = (book, container) => {
  const newDiv = createElement("div");
  setHtmlAttribute(newDiv, "data", book.uuid);
  insertToParent(newDiv, container);
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
  const main = document.querySelector(".grid-div");
  //future upgrade: valdating imputs
  read = read === "true";
  const bookName = new Book(name, author, pages, read);
  bookCard(bookName, main);
  mylibrary.push(bookName);
};

this.askInfo = function (type) {
  const bookInfo = this.type;
  return bookInfo;
};

const books = () => {
  catchElement("#form").setAttribute("style", "display:grid;");
};

const removeBook = (bookuuid) => {
  mylibrary.forEach((object) => {
    if (bookuuid === object.uuid) {
      mylibrary.splice(mylibrary.indexOf(object), 1);
    }
  });
};

Book.prototype.displayInfo = function () {
  const info = `${this.name}, ${this.author}, ${this.pages}, ${this.read}`;
  return info;
};

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
