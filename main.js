const books = [];
const add = document.getElementById('add');
const titlei = document.querySelector('.title');
const authori = document.querySelector('#author');
const bookForm = document.querySelector('.bookForm');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

populateLocalStorage = () => {
  const books = this.getBooks();
  if (!books) {
    localStorage.setItem('books', JSON.stringify([]));
  }
};

getBooks = () => {
  const books = JSON.parse(localStorage.getItem('books'));
  return books || [];
};

addBook = (book) => {
  const books = this.getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};
}

const book = new Book(titlei.value, authori.value);

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(titlei.value, authori.value);
  const { title, author } = book;
  const id = Math.round(Math.random() * 10000000);

  const newObject = {
    id,
    title,
    author,
  };

  if (title && author) {
    book.addBook(newObject);
    // book.showBook();
  }
});

// window.addEventListener('DOMContentLoaded', book.showBook());