const libraryContainer = document.querySelector('.main');
const submitButton = document.querySelector('.sub');
const formPopup = document.querySelector('.formPopup');
const hasRead = document.querySelectorAll("input[type='radio']");
let myLibrary = [];
let books = [];
let cardList = [];
let deleteButtons = [];
let radioVal;

submitButton.addEventListener('click', () => {
  addBookToLibrary();
  console.table(myLibrary);
  updateScreen();
  console.table(books);
});

//object basis of all books
function Book(title, author, pages, read){
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

//Displays books from the myLibrary array
function updateScreen() {
  for(let i = books.length - 1; i < books.length; i++){
    cardList[i] = document.createElement('div');
    cardList[i].classList.add('card');
    libraryContainer.appendChild(cardList[i]);

    bookTitle = document.createElement('h3');
    bookTitle.textContent = books[i].title;
    cardList[i].appendChild(bookTitle);

    bookAuthor = document.createElement('h4');
    bookAuthor.textContent = books[i].author;
    cardList[i].appendChild(bookAuthor);

    bookPages = document.createElement('p');
    bookPages.textContent = "Pages: " + books[i].pages;
    cardList[i].appendChild(bookPages);

    readToggle = document.createElement('input');
    readToggle.type = "checkbox";
    readToggle.name = "readBook";
    readToggle.value = "isRead";
    readToggle.id = "readToggle";
    cardList[i].appendChild(readToggle);

    if(radioValue() === "Has read"){
      hasRead[0].checked = false;
      readToggle.checked = true;
    }

    bookRead = document.createElement('p');
    bookRead.textContent = books[i].read;
    cardList[i].appendChild(bookRead); 

    readToggle.addEventListener('click', () => {
      if(readToggle.checked){
        books[i].read = "Has read"
        bookRead.textContent = books[i].read;
      } else {
        books[i].read = "Has not read";
        bookRead.textContent = books[i].read;
      }
    });

    deleteButtons[i] = document.createElement('button');
    deleteButtons[i].textContent = "Remove";
    cardList[i].appendChild(deleteButtons[i]);

    //book delete button
    deleteButtons[i].addEventListener('click', () => {
      libraryContainer.removeChild(cardList[i]);
      books.splice(i, 1);
      myLibrary.splice(i, 1);
      console.table(books);
    });
  }
}

//Open form popup
function openFormPopup(){
  formPopup.classList.add("openFormPopup");
}

//Close form popup and gets information entered by user
function addBookToLibrary(){
  let titlef;
  let authorf;
  let pagesf;
  let radioVal;
  titlef = document.getElementById('title').value;
  authorf = document.getElementById('author').value;
  pagesf = document.getElementById('pages').value;
  radioVal = radioValue();
  for (let i = myLibrary.length; i < myLibrary.length + 1; i++){
    books[i] = new Book(titlef, authorf, pagesf, radioVal);
  }

  myLibrary.push(books[books.length - 1]);
  formPopup.classList.remove("openFormPopup");

  const allInputs = document.querySelectorAll('input');
  allInputs.forEach(singleInput => singleInput.value = '');
}

//Get radio buttons value
function radioValue() {
  for (let i = 0; i < hasRead.length; i++){
    if (hasRead[0].checked) {
      return "Has read";
    } else {
      hasRead[1].checked = false;
      return "Has not read";
    }
  }
}