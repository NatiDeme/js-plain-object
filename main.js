const titlei = document.querySelector('.title');
const authori = document.querySelector('#author');
const bookForm = document.querySelector('.bookForm');

class Book {
  constructor(title, author, books) {
    this.title = title;
    this.author = author;
    this.books = books;
  }

  populateLocalStorage = () => {
    const books = this.getBooks();
    if (!books) {
      localStorage.setItem(this.books, JSON.stringify([]));
    }
  };

  getBooks = () => {
    const books = JSON.parse(localStorage.getItem(this.books));
    return books || [];
  };

  addBook = (book) => {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  removeBookFromLocalStorage = (id) => {
    this.removeBook(id);
    this.showBook();
  };

  removeBook = (id) => {
    const books = this.getBooks();
    const newBooks = books.filter((book) => book.id.toString() !== id);
    localStorage.setItem(this.books, JSON.stringify(newBooks));
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

const book = new Book(titlei.value, authori.value, 'books');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(titlei.value, authori.value, 'books');
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
