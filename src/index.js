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

  // ------------------------------------------------------------------------
  //fetch all of the current toys and add to the page
  // ------------------------------------------------------------------------

  //fetch request for original toy data 
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
        button.addEventListener('click', () => {
          object[objKey].likes += 1;
          console.log("Number of Likes" , object[objKey].likes)
          div.querySelector('p').textContent = object[objKey].likes
          updateLikes(object[objKey])
        })

      toyCollection = document.querySelector('#toy-collection')
      toyCollection.appendChild(div)
      div.appendChild(h2)
      div.appendChild(img)
      div.appendChild(p)
      div.appendChild(button)
    }
  }

  // ------------------------------------------------------------------------
  //update the database with new likes via PATCH Update
  // ------------------------------------------------------------------------
  function updateLikes(object){
    console.log(`Object ID ${object.id}`),
    console.log(`Object Likes ${object.likes}`)
    fetch(`http://localhost:3000/toys/${object.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  // ------------------------------------------------------------------------
  // add an item to the database
  // ------------------------------------------------------------------------

  const inputTexts = document.querySelectorAll('.input-text')
  document.querySelector('.add-toy-form').addEventListener('submit', (e) => {
    //e.preventDefault()
    return addNewToy()
  })

    function addNewToy(){
      const formData = document.getElementsByClassName('input-text')
      const newToyName = formData[0].value 
      const newToyURL = formData[1].value 


      console.log("adding new toy")
      fetch('http://localhost:3000/toys/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          'name': newToyName,
          'image': newToyURL,
          'likes': '0'
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
    }

});
