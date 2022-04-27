// ——————‡——————  Question 1  ——————‡——————
/* 
When a user selects a number from the select box, build a number of anchor tags (a elements) that matches the selected number
the anchor tags should link to the details page with the id in the query string
on the details page retrieve the id from the query string
add the id to the URL below, make an API call using the final url and display the name and occupation of the selected character
*/

const select = document.querySelector("select");

const listContainer = document.querySelector(".list");

function newList(event) {
  console.log("newList:", event.target.value);
  
}
listContainer.addEventListener("click", newList);

