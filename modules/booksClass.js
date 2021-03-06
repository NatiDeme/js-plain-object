import { titlei, authori } from './htmlElements.js';

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
        <div id="container${books[i].id}" class="booksList">
                <div class="inputs">
                <p id="display-title">${books[i].title}</p>
                <p id="display-author">${books[i].author}</p>
                </div>
                <button type="button" id="${books[i].id}" class ="remove"
                >Remove</button>
              </div>
              <hr>
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
const book = new Book(titlei.value, authori.value);

export { Book, book };