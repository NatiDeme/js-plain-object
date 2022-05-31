import {
  titlei, authori, bookForm, formSection, toAdd, contactInfo, contactSection,
  mainHead, booksSection, checkList, dateTime,
} from './modules/htmlElements.js';
import luxon from './modules/luxon.js';
// eslint-disable-next-line import/named
import { Book, book } from './modules/booksClass.js';

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

toAdd.addEventListener('click', () => {
  formSection.style.display = 'block';
  booksSection.style.display = 'none';
  checkList.style.color = 'black';
  toAdd.style.color = 'blue';
  contactInfo.style.color = 'black';
  contactSection.style.display = 'none';
  mainHead.style.display = 'none';
});
checkList.addEventListener('click', () => {
  window.location.reload();
});
contactInfo.addEventListener('click', () => {
  booksSection.style.display = 'none';
  contactSection.style.display = 'block';
  contactInfo.style.color = 'blue';
  checkList.style.color = 'black';
  formSection.style.display = 'none';
  toAdd.style.color = 'black';
  mainHead.style.display = 'none';
});
dateTime.innerText = luxon.DateTime.now().setLocale('en-US').toLocaleString(luxon.DateTime.DATETIME_FULL_WITH_SECONDS);
