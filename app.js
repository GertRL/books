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
    i = i - 1
    removeStorage(i);
}
//////////
function delBook(event){
    // if(event.target.textContent === 'X'){
    //     if(confirm('Do you realy want to delete this book?')){
    //         let book = event.target.parentElement.textContent.slice(0, -1) //
    //         let i = event.parentNode.parentNode.rowIndex;
    //         document.querySelector('tbody').deleteRow(i);
    //         removeStorage(book)
    //     }
    // }
}

///////////////// remove local storage
function removeStorage(i){

    let books = []
    if(localStorage.getItem("books") === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }
    books.forEach(function (taskFromLS, taskIndex){
        console.log(i)
        if(taskIndex === i) {
            books.splice(taskIndex, 1)
        }
    })

    // let myIndex = books.indexOf(i-1);
    // books.splice(myIndex, 1);

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

    const bookList = document.querySelector('tbody');

    bookList.appendChild(tr)

    let book = [title, author, isbn, nupp]
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


/// mälust raamatute võtmine
document.addEventListener('DOMContentLoaded', getBooks)
function getBooks() {

    // get data from Local storage
    let books
    if(localStorage.getItem("books") === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }

    // go through array of arrays
    books.forEach(function(books) {

        // get TBODY element and create TR element inside
        const bookList = document.querySelector('tbody')
        const tr = document.createElement('tr')

        books.forEach(function(bookItem){

            // create TD element
            const td = document.createElement('td')
            td.innerHTML = bookItem;
            tr.appendChild(td)

        })

        bookList.appendChild(tr)

    });

}


