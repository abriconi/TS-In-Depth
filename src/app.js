showHello('greeting', 'TypeScript');
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = "Hello from ".concat(name);
}
// ===================
var Category;
(function (Category) {
    Category[Category["JavaScript"] = 0] = "JavaScript";
    Category[Category["CSS"] = 1] = "CSS";
    Category[Category["HTML"] = 2] = "HTML";
    Category[Category["TypeScript"] = 3] = "TypeScript";
    Category[Category["Angular"] = 4] = "Angular";
})(Category || (Category = {}));
function getAllBooks() {
    var books = [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: false },
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: false },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: false }
    ];
    return books;
}
function logFirstAvailable(books) {
    var _a;
    console.log("Number of books ".concat(books.length));
    var title = (_a = books.find(function (book) { return book.available === true; })) === null || _a === void 0 ? void 0 : _a.title;
    console.log("First availble book: ".concat(title));
}
function getBookTitlesByCategory(inputCategory) {
    var books = getAllBooks();
    return books
        .filter(function (book) { return book.category === inputCategory; })
        .map(function (book) { return book.title; });
}
function logBookTitles(titles) {
    titles.forEach(function (title) { return console.log(title); });
}
function getBookAuthorByIndex(index) {
    var books = getAllBooks();
    var _a = books[index], title = _a.title, author = _a.author;
    return [title, author];
}
function calcTotalPages() {
    var data = [
        { lib: 'libName1', books: 1000000000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5000000000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3000000000, avgPagesPerBook: 280 }
    ];
    var r = data.reduce(function (acc, obj) {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
    console.log(r);
}
// =====================================
// Tasr 02.01
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();
