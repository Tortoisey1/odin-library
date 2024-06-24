const myLibrary = [new Book('Harry Potter'),
new Book('The Giver'),
new Book('Lord of the Rings')];

const tableBody = document.querySelector('tbody');

const newBookButton = document.querySelector('.newBook');

const sideBarDiv = document.querySelector('.sidebar');

const formSubmit = document.getElementById('submit-form');


function Book(author, title, numberOfPages, read) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

function addBookToLibrary(author, title, numberOfPages, read) {
    const newBook = new Book(author, title, numberOfPages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
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


        bookRow.appendChild(author);
        bookRow.appendChild(title);
        bookRow.appendChild(pages);
        bookRow.appendChild(read);

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

newBookButton.addEventListener('click', displayForm);

formSubmit.addEventListener('click', submitForm, false);

displayLibrary();
