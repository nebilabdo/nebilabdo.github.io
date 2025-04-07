// Select the library container element where books will be displayed
const libraryContainer = document.querySelector(".library-container");

// Load the library from localStorage or initialize as an empty array
const savedLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];

// Function to render the library
function renderLibrary() {
  if (savedLibrary.length === 0) {
    libraryContainer.innerHTML =
      "<p>No books added yet. Browse and add some!</p>";
  } else {
    libraryContainer.innerHTML = ""; // Clear any previous content

    // Group books by category
    const categories = ["Fiction", "Non-Fiction", "Science", "Mystery"];
    categories.forEach((category) => {
      const categoryBooks = savedLibrary.filter(
        (book) => book.category === category
      );

      if (categoryBooks.length > 0) {
        const categorySection = document.createElement("div");
        categorySection.className = "category-section";
        categorySection.innerHTML = `<h3>${category}</h3>`;

        const categoryList = document.createElement("div");
        categoryList.className = "category-list";

        categoryBooks.forEach((book) => {
          const card = document.createElement("div");
          card.className = "book-card";
          card.innerHTML = `
            <img src="${book.image}" alt="${book.title}" />
            <h4>${book.title}</h4>
            <p>Author: ${book.author}</p>
          `;
          categoryList.appendChild(card);
        });

        categorySection.appendChild(categoryList);
        libraryContainer.appendChild(categorySection);
      }
    });
  }
}
document.querySelector("#clear-library-btn").addEventListener("click", () => {
  localStorage.removeItem("myLibrary"); // remove from local storage
  savedLibrary.length = 0; // clear the in-memory array
  renderLibrary(); // refresh the page content
});

// Call renderLibrary to display the books on page load
renderLibrary();

// Add a book to the library (this function should be called when "Add to Library" button is clicked)
function addToLibrary() {
  // Assume you have the input fields for title, author, image, and category
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const imageInput = document.querySelector("#image");
  const categorySelect = document.querySelector("#category");

  // Get values from the input fields
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const image = imageInput.value.trim();
  const category = categorySelect.value;

  // Validate input values
  if (!title || !author || !image || !category) {
    alert("Please fill in all fields.");
    return;
  }

  // Create a new book object
  const newBook = { title, author, image, category };

  // Add the new book to the library array
  savedLibrary.push(newBook);

  // Save the updated library to localStorage
  localStorage.setItem("myLibrary", JSON.stringify(savedLibrary));

  // Clear the input fields after adding the book
  titleInput.value = "";
  authorInput.value = "";
  imageInput.value = "";
  categorySelect.value = "Fiction"; // Default category

  // Re-render the library to display the new book
  renderLibrary();
}

// Add an event listener to the "Add to Library" button
document
  .querySelector("#add-to-library-btn")
  .addEventListener("click", addToLibrary);
