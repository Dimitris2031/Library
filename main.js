const myLibrary = [];

class Book {
    constructor(bookName,Author){
        this.bookName = bookName;
        this.Author = Author;
    }
    talk(){
        console.log(this.bookName,this.Author);
    }
}

function addbook(){
    const main =  document.querySelector('.main');
    main.innerHTML = '';
    event.preventDefault();

    const form = event.target;
    const {bookName,Author} = form.elements;
    
    myLibrary.push(new Book(bookName.value,Author.value));
    for (const book of myLibrary){
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');

        h1.textContent = `Book Name: ${book.bookName}`;
        h2.textContent = `Author: ${book.Author}`;

        div.append(h1,h2);
        main.appendChild(div);

        console.log(book['Author']);

    }
    form.reset();
}
