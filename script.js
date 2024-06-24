let myLibrary = [];

const tableBody = document.querySelector('tbody');

const newBookButton = document.querySelector('.newBook');

const sideBarDiv = document.querySelector('.sidebar');

const formSubmit = document.getElementById('submit-form');

let bookCounter = 0;

function Book(author, title, numberOfPages, read, id) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(author, title, numberOfPages, read) {
    const newBook = new Book(author, title, numberOfPages, read, bookCounter++);
    myLibrary.push(newBook);
    displayLibrary();
}

function displayLibrary() {
    // Clear the library div
    tableBody.innerHTML = '';


    myLibrary.forEach(book => {

        const bookRow = document.createElement('tr');

        const author = document.createElement('td');
        author.textContent = book.author;

        const title = document.createElement('td');
        title.textContent = book.title;

        const pages = document.createElement('td');
        pages.textContent = book.numberOfPages;

        const read = document.createElement('td');
        read.textContent = book.read;

        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeBook(book.id);
        });

        removeCell.appendChild(removeButton);

        bookRow.appendChild(author);
        bookRow.appendChild(title);
        bookRow.appendChild(pages);
        bookRow.appendChild(read);
        bookRow.appendChild(removeCell);

        tableBody.appendChild(bookRow);
    });
}


function displayForm() {
    sideBarDiv.style.display = 'flex';
}


function submitForm(event) {
    event.preventDefault();

    sideBarDiv.style.display = 'none';


    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const numberOfPages = document.getElementById('number-pages').value;
    const read = document.getElementById('read').checked;

    document.querySelector('form').reset();

    addBookToLibrary(author, title, numberOfPages, read);

    displayLibrary();

}

function removeBook(bookId) {

    myLibrary = myLibrary.filter(book => book.id !== bookId);

    displayLibrary();
}


newBookButton.addEventListener('click', displayForm);

formSubmit.addEventListener('click', submitForm, false);

displayLibrary();
