$(document).ready(function() {
  let cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suits = ["spades", "clubs", "diamonds", "hearts"];
  let newArray = [];
  suits.forEach(function(suits) {
    cards.forEach(function(cards) {
      newArray.push(cards + " of " + suits);
    });
  });
  newArray.forEach(function(element) {
    $("ul#result").append("<li></li>")
    $("ul#result").children("li").last().text(element);
  });
});