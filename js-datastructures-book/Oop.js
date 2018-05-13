function Book(title, pages, isbn) {
    this.pages = pages;
    this.title = title;
    this.isbn = isbn;
}

Book.prototype.printTitle = function() {
    console.log("title: " + this.title);
}

var book = new Book('title', 'pag', 'isbn');
book.printTitle();
console.log(book);