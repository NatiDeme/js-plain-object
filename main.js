const books = [];
const add = document.getElementById('add');

// add.addEventListener(event)

    class Book {
      constructor(title, author) {
        this.title = title;
        this.author = author;
      }
    };
   
    populateLocalStorage = () => {
      const books = this.getBooks();
      if (!books) {
        localStorage.setItem('books', JSON.stringify([]));
        return books || [];
      };
    }

const booksSection = document.getElementById('books');
const booksList = document.createElement('div');
booksList.className = 'list';
let booksElement = '';

// const newObject = {};
// // eslint-disable-next-line no-unused-vars
// function addElement() {
//   newObject.title = document.getElementById('title').value;
//   newObject.author = document.getElementById('author').value;
//   books.push(newObject);
//   for (let i = 0; i < books.length; i += 1) {
//     booksElement = `
              
//               <p id="display-title">${books[i].title}</p>
//               <p id="display-author">${books[i].author}</p>
//               <button id="remove">Remove</button>
//               <hr>
              
//     `;
//   }
// }

booksSection.appendChild(booksList);
booksList.innerHTML += booksElement;


const book = new Book(inputTitle.value, inputAuthor.value);

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const book = new Book(inputTitle.value, inputAuthor.value);
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
});

window.addEventListener("DOMContentLoaded", book.showBook());