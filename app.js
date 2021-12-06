const form =document.querySelector('form')
form.addEventListener('submit',addBook)

const bookList = document.querySelector('tbody');
bookList.addEventListener("click", delBook)

const deleteBtn = document.querySelector('#delete-books')
deleteBtn.addEventListener('click',delBooks)

function deleteRow(book) {
    var i = book.parentNode.parentNode.rowIndex;
    document.querySelector('table').deleteRow(i);
     removeStorage(i);
}

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

function delBooks() {
    while(bookList.firstElementChild) {
        bookList.removeChild(bookList.firstChild)
    }
    removeAllStorage()
}


function removeAllStorage() {
    localStorage.removeItem('books')
}


function addBook(event) {
    // get task value from form input
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value
    const xxx = "<input type=\"button\" value=\"Delete\" onclick=\"deleteRow(this)\">"

    const tr = document.createElement('tr')
    tr.innerHTML = "<td>" + title + "</td>" + "<td>" + author + "</td>" + "<td>" + isbn + "</td>" + "<td>" + xxx + "</td>";


    //get element from document object
    const bookList = document.querySelector('tbody');
    //////////// Title
    const li = document.createElement('td')
    li.className = 'title'
    const x = document.createTextNode(title)
    li.appendChild(x)

    //////////////////// Author
    const op = document.createElement('td')
    op.className = 'author'
    const y = document.createTextNode(author)
    op.appendChild(y)

    //////////////// ISBN
    const ul = document.createElement('td')
    ul.className = 'isbn'
    const z = document.createTextNode(isbn)
    ul.appendChild(z)



    //////////////////
    const ti = document.createElement('tr')
    ti.className = 'tühi'
    const g = document.createTextNode('')
    ti.appendChild(g)



    bookList.appendChild(tr)


    let book = [title, author, isbn]
    bookStorage(book)

    event.preventDefault()

}

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

