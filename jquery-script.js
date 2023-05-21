/** @format */

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
// function to return an array of fruits based on matching fruit list values
function search(str) {
  return fruit.filter((item) => item.toLowerCase().includes(str.toLowerCase()));
}

//function to show the suggestions in a list below the input
function showSuggestions(results) {
  ///empties the list first
  $(".suggestions ul")
    .empty()
    //to prevent the full list from showing up when there has been no entries but input has focus &&
    //prevents the full list when the input filed has been deleted by the operator
    .css(
      "display",
      results.length > 0 && $("#fruit").val().trim() !== "" ? "block" : "none"
    );
  //creates and appends the li's to the ul for each of the results
  results.forEach((val) => {
    $("<li>").text(val).appendTo($(".suggestions ul"));
  });
}

///event handler to run showsuggestions based on the results of the search function called on the text field of the input
$("#fruit").on("keyup", function () {
  showSuggestions(search($(this).val()));
});
/// event handler to fill the input value with any li that is clicked on
/// then clears the ul
$(".suggestions ul").on("click", "li", function () {
  $("#fruit").val($(this).text());
  $(".suggestions ul").css("display", "none");
});
