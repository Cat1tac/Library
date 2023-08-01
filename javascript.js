const libraryContainer = document.querySelector('.main');
const addBookPopUp = document.querySelector('.btn');

let myLibrary = ['Harry Potter', 'The lord of the rings', 'Dragon Ball Z', '48 Laws of Power'];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let information = `${title} by ${author}, ${pages} pages, ${read}`;
    return information;
  }
}

function addBookToLibrary(addbook) {
  myLibrary.push(addbook);
}

bookDisplay();

function bookDisplay() {
  let card;
  for(let i = 0; i <= myLibrary.length - 1; i++){
    card = document.createElement('div');
    card.classList.add('card');
    card.textContent= myLibrary[i];
    console.log(myLibrary[i]);
    libraryContainer.appendChild(card);
  }
}

//Open and close form popup
const formPopup = document.querySelector('.formPopup');
function openFormPopup(){
  formPopup.classList.add("openFormPopup");
}
function closeFormPopup(){
  formPopup.classList.remove("openFormPopup");
}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
console.log(theHobbit.info());  