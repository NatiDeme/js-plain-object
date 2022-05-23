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
      return books || [];
    }
  };

  getBooks = () => {
    const books = JSON.parse(localStorage.getItem('books'));
    console.log(books);
    return books || [];
  };

  addBook = (book) => {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  };

  removeBookFromLocalStorage = (id) => {
    this.removeBook(id);
    this.showBook();
  };

  removeBook = (id) => {
    const books = this.getBooks();
    const newBooks = books.filter((book) => book.id.toString() !== id);
    localStorage.setItem('books', JSON.stringify(newBooks));
    document.querySelector(`#container${id}`).remove();
  };

  showBook = () => {
    this.populateLocalStorage();
    const books = this.getBooks();
    const booksSection = document.getElementById('books');
    const booksList = document.createElement('div');
    booksList.className = 'list';
    let booksElement = '';
    for (let i = 0; i < books.length; i += 1) {
      booksElement = `
      <div id="container${books[i].id}">
              <p id="display-title">${books[i].title}</p>
              <p id="display-author">${books[i].author}</p>
              <button type="button" id="${books[i].id}" class ="remove" 
              >Remove</button>
              <hr>
            </div>
    `;
     console.log(books[i].id);
      booksSection.appendChild(booksList);
      booksList.innerHTML += booksElement;
      const remove = document.querySelectorAll('.remove');
      if (remove.length) {
        remove.forEach((button) => {
          button.addEventListener('click', () => {
            this.removeBookFromLocalStorage(button.id);
            window.location.reload();
          });
        });
      }
    }
  };
}

// const newObject = {};
// // eslint-disable-next-line no-unused-vars
// function addElement() {
//   newObject.title = document.getElementById('title').value;
//   newObject.author = document.getElementById('author').value;
//   books.push(newObject);

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
    bookForm.reset();
    book.showBook();
  }
  window.location.reload();
});

window.addEventListener('DOMContentLoaded', book.showBook());
