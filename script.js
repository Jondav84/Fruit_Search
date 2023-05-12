/** @format */

// Creating input and suggestionsList variables from the corresponding HTML elements
const fruitInput = document.querySelector("#fruit");
const suggestionsList = document.querySelector(".suggestions ul");

// Define an array of fruit names
const fruit = [
  // Fruit names..
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// Function to filter the fruit array based on the input string
function search(str) {
  let results = [];

  // Filter input based on the input string, assigning only the matching values from the fruit array
  results = fruit.filter((item) =>
    item.toLowerCase().includes(str.toLowerCase())
  );

  // If the input string is empty, prevents the results containing anything when there is no input value.
  if (str === "") {
    results = [];
  }

  return results;
}

// Event handler for the input's keyup event
// Updates the suggestions based on the current input value
function handleSearchInput(e) {
  const inputVal = e.target.value;
  const searchResults = search(inputVal);
  showSuggestions(searchResults);
}

// Function to display the suggestions based on the search results
function showSuggestions(results) {
  // Clear the existing suggestions
  while (suggestionsList.firstChild) {
    suggestionsList.removeChild(suggestionsList.firstChild);
  }

  // Create list elements for each result and append them to the suggestions
  results.forEach((val) => {
    const li = document.createElement("li");
    li.textContent = val;
    suggestionsList.appendChild(li);
  });

  // Show or hide the suggestions based on the number of results
  suggestionsList.style.display = results.length > 0 ? "block" : "none";
}

// Event handler for clicking on a suggestion
// Updates the input value and hides the suggestions
function handleSuggestionClick(e) {
  if (e.target.tagName === "LI") {
    const suggestion = e.target.textContent;
    fruitInput.value = suggestion;
    suggestionsList.style.display = "none";
  }
}

// Added event listeners
fruitInput.addEventListener("keyup", handleSearchInput);
suggestionsList.addEventListener("click", handleSuggestionClick);
