document.addEventListener("DOMContentLoaded", () => {
  
  let addToy = false;

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
  fetch("http://localhost:3000/toys/")
  .then(response => response.json())
  .then(data => createToyCards(data))
  //.catch(console.log("Error with data"))

  //function for adding HTML elements
  function createToyCards(object){
    console.log(object)
    console.log("Create Toys is Running")
    for(const objKey in object){
      console.log("This is the objKey" , objKey)
      const div = document.createElement('div')
        div.classList.add('card')
      const h2 = document.createElement('h2')
        h2.textContent = object[objKey].name
      const img = document.createElement('img')
        img.src = object[objKey].image
        img.classList.add('toy-avatar')
      const p = document.createElement('p')
        p.textContent = object[objKey].likes
      const button = document.createElement("button")
        button.textContent = 'button text'
        button.classList.add('like-btn')
        button.id = object[objKey].id

      toyCollection = document.querySelector('#toy-collection')
      toyCollection.appendChild(div)
      div.appendChild(h2)
      div.appendChild(img)
      div.appendChild(p)
      div.appendChild(button)
    }
  }

});
