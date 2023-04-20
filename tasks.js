// 1)
function Book(name, author, year) {
    this.name = name
    this.author = author
    this.year = year
    this.reader = null

    Book.prototype.isAvailable = function(){
        if (this.reader === null) return true
        else return false
    }

    Book.prototype.takeBook = function(readerName){
        if (this.isAvailable()) {
            this.reader = readerName
            return true
        } else return false
    }

    Book.prototype.returnBook = function(){
        if (!this.isAvailable()) {
            this.reader = null
            return true
        } return false
    }

    Book.prototype.changeBookName = function(newBookName) {
        if (this.name != newBookName) {
            this.name = newBookName
            return true
        } else return false
    }

    Book.prototype.changeAuthorName = function(newAuthorName) {
        if (this.author != newAuthorName) {
            this.author = newAuthorName
            return true
        } else return false
    }

    Book.prototype.getCurrentReader = function(){
        return this.reader
    }

}

// isAvailable() // true/false - доступна ли книга для выдачи или она у кого-то на руках
// takeBook(readerName) - должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader, возвращает true, если выдача книги возможна и она произведена, false, если книга уже выдана
// returnBook() - регистрирует возврат книги, устанавливает reader в null, возвращает true, если книга была на руках, false если книга итак в библиотеке
// changeBookName(newBookName) - изменяет название книги на newBookName, возвращает true/false, в зависимости от результата
// changeAuthorName(newAuthorName) - изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата
// getCurrentReader() - возвращает имя текущего читателя или null, если книга доступна для выдачи
// ____________________
