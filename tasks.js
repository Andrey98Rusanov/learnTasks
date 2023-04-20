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
