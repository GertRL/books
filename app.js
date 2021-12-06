const form =document.querySelector('form')
form.addEventListener('submit',addBook)

const bookList = document.querySelector('tbody');
bookList.addEventListener("click", delBook)

const deleteBtn = document.querySelector('#delete-books')
deleteBtn.addEventListener('click',delBooks)
////////////////// delete nupp
function deleteRow(book) {
    var i = book.parentNode.parentNode.rowIndex;
    document.querySelector('table').deleteRow(i);
     removeStorage(i);
}
///////////////// remove local storage
function removeStorage(i){

    let books = []
    if(localStorage.getItem("books") === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }
    let myIndex = books.indexOf(i-1);
    books.splice(myIndex, 1);

    localStorage.setItem('books', JSON.stringify(books))

}
//// peaks olema delete all nupp
function delBooks() {
    while(bookList.firstElementChild) {
        bookList.removeChild(bookList.firstChild)
    }
    removeAllStorage()
}

function removeAllStorage() {
    localStorage.removeItem('books')
}

///// uute raamatute lisamine
function addBook(event) {
    // get task value from form input
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value
    const nupp = "<input type=\"button\" value=\"Delete\" onclick=\"deleteRow(this)\">"

    const tr = document.createElement('tr')
    tr.innerHTML = "<td>" + title + "</td>" + "<td>" + author + "</td>" + "<td>" + isbn + "</td>" + "<td>" + nupp + "</td>";


    //get element from document object
    const bookList = document.querySelector('tbody');

    bookList.appendChild(tr)

    let book = [title, author, isbn]
    bookStorage(book)

    event.preventDefault()

}

/// raamatute salvestamine local storage
function  bookStorage(book){

    let books
    if(localStorage.getItem('books') === null) {
        books = []
    }
    else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))

}

