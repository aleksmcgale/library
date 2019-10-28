let myLibrary = [];



function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.index = NaN;
}

function addBookToLibrary() {
    const new_book = document.querySelector('.new_book');
    new_book.addEventListener('mousedown', function () {
        let title = prompt("title of book");
        console.log(title);
        while (title === ''){
            title = prompt("Try again: title of book");
        }
        let author = prompt("author of book");
        while (author === ''){
            author = prompt("Try again: title of book");
        }
        let pages = prompt("num of pages");
        while (pages === ''){
            pages = prompt("Try again: title of book");
        }
        let read = prompt("read, yes or no").toLowerCase();
        if (read !== 'yes'){
            read = 'no';
        }

        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
        render();
    });



}
addBookToLibrary();

function removeBookFromLibrary(){
    const remove = document.querySelectorAll('.remove_button');
    console.log(remove);
    remove.forEach((button) => {
        button.addEventListener('mousedown', function(){
            let index = parseInt(button.getAttribute('data-attribute'), 10);
            console.log(index);
            myLibrary.splice(index, 1);
            render();
        });


    });
    render();
}
removeBookFromLibrary();

function render(){
    const container = document.querySelector('.container');
    let i = 0;
    container.innerHTML = '';
    while (i < myLibrary.length){
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let remove = document.createElement('button');
        let p = document.createElement('p');

        div.setAttribute('class', 'book');
        h2.setAttribute('class', 'title');
        remove.setAttribute('class', 'remove_button');
        remove.setAttribute('data-attribute', i.toString());

        h2.innerHTML = myLibrary[i].title;
        remove.innerHTML =  'Remove';
        div.appendChild(h2);

        p.innerHTML = myLibrary[i].author + ' -- ' + myLibrary[i].pages + ' pages.';
        div.appendChild(p);

        remove.addEventListener('click', deleteBook);
        function deleteBook(){
            let i = parseInt(this.getAttribute('data-attribute'),10);
            container.removeChild(div);
            myLibrary.splice(i, 1);

        }

        let toggle = document.createElement('button');
        toggle.setAttribute('class', 'toggle');
        toggle.setAttribute('data-attribute', i.toString());
        if (myLibrary[i].read === 'yes'){
            toggle.style.backgroundColor = 'green';
            toggle.innerHTML = 'Read';
        }else{
            toggle.innerHTML = 'Not Read';
        }
        toggle.addEventListener('click', toggleButton);


        function  toggleButton() {
            let i = parseInt(this.getAttribute('data-attribute'),10);
            let book = myLibrary[i];
            if (book.read === 'no'){
                toggle.style.backgroundColor = 'green';
                toggle.innerHTML = 'Read';
                book.read ='yes';
            }else {
                toggle.style.backgroundColor = 'transparent';
                toggle.innerHTML = 'Not Read';
                book.read='no';

            }
        }
        div.appendChild(toggle);

        div.appendChild(remove);

        container.appendChild(div);

        i++;
    }

}
render();