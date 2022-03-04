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
  .then(createToyCards()) //function for adding cards will go here)
  .catch(console.log("Error with data"))

  //function for adding HTML elements
  function createToyCards(){
    
    const div = document.createElement('div')
      div.classList.add('card')
    const h2 = document.createElement('h2')
      h2.textContent = 'h2 content text'
    const img = document.createElement('img')
      img.src = 'www.google.com'
      img.classList.add('toy-avatar')
    const p = document.createElement('p')
      p.textContent = 'paragraph text'
    const button = document.createElement("button")
      button.textContent = 'button text'
      button.classList.add('like-btn')
      button.id = 'toyID'

    toyCollection = document.querySelector('#toy-collection')
    toyCollection.appendChild(div)
    div.appendChild(h2)
    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(button)

  }





});
