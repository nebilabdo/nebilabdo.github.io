const quotes = [
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "Programs must be written for people to read.",
    author: "Harold Abelson",
  },
  {
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  {
    text: "You miss 100% of the bugs you don’t test for.",
    author: "Anonymous",
  },
  {
    text: "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    author: "Edsger W. Dijkstra",
  },
  {
    text: "Always code as if the person maintaining it is a maniac who knows where you live.",
    author: "John Woods",
  },
];

function generateQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[index].text;
  document.getElementById("author").textContent = "– " + quotes[index].author;
}
