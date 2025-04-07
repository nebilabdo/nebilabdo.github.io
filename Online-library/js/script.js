function searchBooks() {
  let input = document.getElementById("search-bar").value.toLowerCase();
  let books = document.querySelectorAll(".book");

  books.forEach((book) => {
    let title = book.getAttribute("data-title").toLowerCase();
    book.style.display = title.includes(input) ? "block" : "none";
  });
}

// Add Book to Library
function addToLibrary(bookTitle) {
  let library = JSON.parse(localStorage.getItem("library")) || [];
  if (!library.includes(bookTitle)) {
    library.push(bookTitle);
    localStorage.setItem("library", JSON.stringify(library));
    alert(bookTitle + " added to My Library!");
  }
}

// Display My Library Books
window.onload = function () {
  let libraryList = document.getElementById("library-list");
  if (libraryList) {
    let library = JSON.parse(localStorage.getItem("library")) || [];
    library.forEach((book) => {
      let li = document.createElement("li");
      li.textContent = book;
      libraryList.appendChild(li);
    });
  }
};
function searchBooks() {
  const input = document.getElementById("search-bar").value.toLowerCase();
  const books = document.querySelectorAll(".book");

  books.forEach((book) => {
    const title = book.dataset.title.toLowerCase();
    if (title.includes(input)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
}
