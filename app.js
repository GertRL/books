const form =document.querySelector('form')
form.addEventListener('submit',addBook)

const bookList = document.querySelector('tbody');
bookList.addEventListener("click", delBook)

const deleteBtn = document.querySelector('#delete-books')
deleteBtn.addEventListener('click',delBooks)

///// kustuta nupp
function delBook(event) {

    if (event.target.textContent === 'X') {

        if (confirm('Do you really want to delete this book?')) {

            event.target.parentElement.remove()
            let book = (event.target.parentElement.textContent.slice(0, -1))
            removeStorage(book)
        }
    }

}

function removeStorage(book) {
    let books
    if(localStorage.getItem('books') === null) {
        books = []
    }
    else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach(function (taskFromLS, taskIndex){
        if(taskFromLS === book) {
            books.splice(taskIndex, 1)
        }
    })
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

    ///////// X button
    const link = document.createElement('a')
    link.className = 'del'
    link.appendChild(document.createTextNode('X'))
    link.setAttribute('href' , '#')

    //////////////////
    const ti = document.createElement('tr')
    ti.className = 'tühi'
    const g = document.createTextNode('')
    ti.appendChild(g)

    //ADD LI TO TASK LIST
    bookList.appendChild(li)
    bookList.appendChild(op)
    bookList.appendChild(ul)
    bookList.appendChild(link)
    bookList.appendChild(ti)
    // save task to local storage
    bookStorage(title)
    bookStorage(author)
    bookStorage(isbn)

    //clear form input value
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
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

