const libraryContainer = document.querySelector('.main');
const submitButton = document.querySelector('.sub');
const formPopup = document.querySelector('.formPopup');
let myLibrary = [];
let books = [];




submitButton.addEventListener('click', () => {
  addBookToLibrary();
  console.log(myLibrary);
  updateScreen();
});

function Book(title, author, pages, read){
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function() {
    let information = `${title} by ${author}, ${pages} pages, ${read}`;
    return information;
  }
}

//Displays books from the myLibrary list
function updateScreen() {
  let card;
  for(let i = myLibrary.length - 1; i < myLibrary.length; i++){
    card = document.createElement('div');
    card.classList.add('card');
    card.textContent= myLibrary[i];
    console.log(myLibrary[i]);
    libraryContainer.appendChild(card);
  }
}

//Open and close form popup

function openFormPopup(){
  formPopup.classList.add("openFormPopup");
}
function addBookToLibrary(){
  let title;
  let author;
  let pages;
  let radioVal;
  title = document.getElementById('title').value;
  author = document.getElementById('author').value;
  pages = document.getElementById('pages').value;
  radioVal = radioValue();
  for (let i = myLibrary.length; i < myLibrary.length + 1; i++){
    books[i] = new Book(title, author, pages, radioVal);
  }

  myLibrary.push(books[books.length - 1].info());
  formPopup.classList.remove("openFormPopup");
}

function radioValue () {
  const hasRead = document.getElementsByName('readBook');
  if (hasRead[0].checked === true) {
    return "has read";
  } else {
    return "has not read";
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
console.log(theHobbit.info());  

console.log(myLibrary.length);