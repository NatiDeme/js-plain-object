const books = [];
const add = document.getElementById('add');

// add.addEventListener(event => {
    
// })
const booksSection = document.getElementById('books');
const booksList = document.createElement('div');
booksList.className = 'list';
let booksElement = '';

const newObject = {};
// eslint-disable-next-line no-unused-vars
function addElement() {
  newObject.title = document.getElementById('title').value;
  newObject.author = document.getElementById('author').value;
  books.push(newObject);
  for (let i = 0; i < books.length; i += 1) {
    booksElement = `
              
              <p id="display-title">${books[i].title}</p>
              <p id="display-author">${books[i].author}</p>
              <button id="remove">Remove</button>
              <hr>
              
    `;
  }
}

booksSection.appendChild(booksList);
booksList.innerHTML += booksElement;
