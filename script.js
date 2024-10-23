const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "read", "#64412a", "100", "350")
const book2 = new Book("The Brief Wondrous Life of Oscar Wao", "Junot Diaz", 339, "not read yet", "#9d6838", "150", "450")
const bookColors = ["#64412a", "#9d6838", "#7a2e19", "#212121", "#0b2f3b",
     "#0f3a63", "#1180bc", "#9d4724", "#5f6a54", "#81231e", "#70683b", "#295128"]

let myLibrary = [book1, book2];

const bookListEl = document.getElementById("book-list")
const addBookBtn = document.getElementById("submit")
const bookContainerEl = document.getElementById("book-container")
const showBtn = document.getElementById("show-dialog")

const minWidth = 80
const maxWidth = 150
const minHeight = 350
const maxHeight = 450

function Book(title, author, pages, read, color, width, height) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.color = color;
    this.width = width;
    this.height = height;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
    }
}

function drawLibrary(library) {
    let bookHtml = ""
    for(let i = 0; i < library.length; i++){
        bookHtml += 
            `<div class="book" style="background-color:${library[i].color};width:${library[i].width}px;height:${library[i].height}px;">
                <div>
                    <p id="title-text">${library[i].title}</p>
                    <hr>
                    <p id="author-text">${library[i].author}</p>
                    <p id="page-text">${library[i].pages} pages</p>
                </div>
                <button class="trash-btn" onclick="deleteBook(this.value)" value="${i}"><i class="fa fa-trash-o" style="font-size:26px"></i></button>
            </div>`
    }
    bookContainerEl.innerHTML = ""
    bookContainerEl.innerHTML = bookHtml
}
drawLibrary(myLibrary) 

function getCoverColor() {
    return bookColors[Math.floor(Math.random() * bookColors.length)]
}

function getBookDim(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

addBookBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
    let bookTitle = document.getElementById("book-title").value
    let bookAuthor = document.getElementById("book-author").value
    let bookPages = document.getElementById("book-pages").value
    let bookRead = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (bookRead) {
        var newBook = new Book(bookTitle, bookAuthor, bookPages, "read",
            getCoverColor(), getBookDim(minWidth, maxWidth), getBookDim(minHeight, maxHeight)
        )
    } else {
        var newBook = new Book(bookTitle, bookAuthor, bookPages, "not read yet",
            getCoverColor(), getBookDim(minWidth, maxWidth), getBookDim(minHeight, maxHeight)
        )
    }

    myLibrary.push(newBook)
    drawLibrary(myLibrary)
  });

showBtn.addEventListener("click", () => {
    dialog.showModal();
  });

function deleteBook(value) {
    myLibrary.splice(value, 1)
    drawLibrary(myLibrary)
  }




