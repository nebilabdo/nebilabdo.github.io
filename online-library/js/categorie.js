function addToLibrary(title, author, image) {
  let library = JSON.parse(localStorage.getItem("myLibrary")) || [];

  const newBook = { title, author, image };

  // Check if the book already exists
  const exists = library.some(
    (book) => book.title === title && book.author === author
  );

  if (!exists) {
    library.push(newBook);
    localStorage.setItem("myLibrary", JSON.stringify(library));
    alert(`${title} added to your library!`);
  } else {
    alert(`${title} is already in your library.`);
  }
}
