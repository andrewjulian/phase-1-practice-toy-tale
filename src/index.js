let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  
  //opens form to create new toy
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  //fetch all of the current toys and add to the page

  //fetch request
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(data => console.log(data)) //function for adding cards will go here)
  .catch(console.log("Error with data"))

  //function for adding HTML elements






});
