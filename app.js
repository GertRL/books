const form =document.querySelector('form')
form.addEventListener('submit',addBook)

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
   // bookStorage(title)

    //clear form input value
  //  document.querySelector('#task').value = ''
    event.preventDefault()

}


