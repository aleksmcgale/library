let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = NaN;

}

function addBookToLibrary() {
    let title = prompt("title of book");
    const author = prompt("author of book");
    const pages = prompt("num of pages");
    const read = prompt("read, yes or no");
    title = new Book(title, author, pages, read);
    myLibrary.push(title);
    render();

}
function render(){
    const con = document.querySelector('.container');
    let i = 0;
    con.innerHTML = '';
    while (i < myLibrary.length){
        let div = document.createElement('div');
        let book = document.createElement('p');
        let remove_button = document.createElement('button');
        myLibrary[i].index = i;
        remove_button.innerHTML= "remove";
        remove_button.setAttribute('class','remove');
        book.innerHTML = myLibrary[i].author;

        div.appendChild(book);
        div.appendChild(remove_button);
        con.appendChild(div);
        i++;

    }
}
render();
function new_book(){
    const newBook = document.querySelector('.new_book');
    newBook.addEventListener('mousedown', function () {
        addBookToLibrary();
    });
}
new_book();

function remove_book(){
    const r = document.querySelector('.remove');
    r.addEventListener('mousedown', function(){
        const p = r.parentNode;
        p.remove();

    });
    render();
}
remove_book();