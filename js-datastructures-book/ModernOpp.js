class Book {
    constructor(title, pages, isbn) {
        this._title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printIsbn() {
        console.log(this.isbn);
    }

    get title() {
        console.log('getter invoked');
        return this._title;
    }

    set title(newTitle) {
        console.log('setter invoked');
        this._title = newTitle;
    }
}


let book = new Book('title', 'pages', 'isbn');

book.printIsbn();

console.log(book.title);
book.title = 'qwerty';
console.log(book.title);

