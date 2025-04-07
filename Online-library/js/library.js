// Function to add a book to the library
function addToLibrary(title, author, image, category) {
  // Retrieve the current library or create an empty one if none exists
  const savedLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];

  // Create a new book object
  const newBook = {
    title,
    author,
    image,
    category,
  };

  // Add the new book to the saved library
  savedLibrary.push(newBook);

  // Save the updated library back to localStorage
  localStorage.setItem("myLibrary", JSON.stringify(savedLibrary));

  alert(`${title} by ${author} has been added to your library!`);
}
