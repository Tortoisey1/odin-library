const myLibrary = [new Book('Harry Potter'),
new Book('The Giver'),
new Book('Lord of the Rings')];

const libraryDiv = document.querySelector('.library');

const newBookButton = document.querySelector('.newBook');

const sideBarDiv = document.querySelector('.sidebar');

const formSubmit = document.getElementById('submit-form');


function Book(name) {
    // the constructor...
    this.name = name;
}

function addBookToLibrary(name) {
    const newBook = new Book(name);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

function displayLibrary() {
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.textContent = book.name;
        libraryDiv.appendChild(bookDiv);
    });
}


function displayForm() {
    sideBarDiv.style.display = 'flex';
}


function submitForm(event) {
    let warn = "preventDefault() won't let you check this!<br>";
    formSubmit.innerHTML += warn;
    event.preventDefault();
}

newBookButton.addEventListener('click', displayForm);

formSubmit.addEventListener('click', submitForm, false);

displayLibrary();
