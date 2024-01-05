import { displayUsers } from './displayUsers.js';
import { capitalize } from './capitalizeGetAddress.js';
import { filterAddress } from './filterByCountry.js';
import {wrongCountry} from './displayError.js';

const endpoint = "https://65834d5d4d1ee97c6bcdcb91.mockapi.io/techin/users";

// GET
const input = document.getElementById("filter__input");
const button = document.getElementById("filter__button");
const outputCard = document.getElementById("output");
// POST
const username = document.getElementById("user__name");
const email = document.getElementById("user__email"); 
const country = document.getElementById("user__country");
const avatar = document.getElementById("user__avatar");
const userOutput = document.getElementById("output__new__user");
const buttonNew = document.getElementById("create__user__button")
// PATACH
const userUpdateID = document.getElementById("user__id")
const usernameUpdate = document.getElementById("user__update__name");
const emailUpdate = document.getElementById("user__update__email"); 
const countryUpdate = document.getElementById("user__update__country");
const avatarUpdate = document.getElementById("user__update__avatar");
const userOutputUpdate = document.getElementById("output__updated__user");
const buttonUpdate = document.getElementById("update__user__button")
// Delete
const userDeleteID = document.getElementById("delete__user");
const buttonDelete = document.getElementById("delete__button");
const userOutputDelete = document.getElementById("output__delete__user");

// GET
button.addEventListener("click", async () => {
  try {
    let response = await fetch(endpoint);
    if (response.ok) {
      let users = await response.json();
      let filtered = filterAddress(users, capitalize(input.value));
      if(filtered.length > 0){
        displayUsers(filtered, outputCard);
      }else{
        wrongCountry(outputCard);
      }
  
    } else {
      throw new Error("HTTP Error");
    }
  } catch (error) {
    console.error(error);
  }
});


// POST

buttonNew.addEventListener("click", () => {
  const newUser = {
      userName: username.value,
      email: email.value,
      avatar: avatar.value,
      address: country.value,
  };

  fetch(endpoint, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(newUser),
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then((data) => {

      displayUsers([data], userOutput);
  })
  .catch((err) => console.error("Error:", err));
});

// PUT

buttonUpdate.addEventListener('click', ()=>{
  const userID = userUpdateID.value;

  const updateUser = {
    userName: usernameUpdate.value,
    email: emailUpdate.value,
    avatar: avatarUpdate.value,
    address: countryUpdate.value,
};

fetch(`${endpoint}/${userID}`, {
  method: "PUT",
  headers: { "Content-type": "application/json; charset=UTF-8" },
  body: JSON.stringify(updateUser),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    displayUsers([data], userOutputUpdate);
  })
  .catch((err) => console.error("Error:", err));
})

// DELETE

buttonDelete.addEventListener('click', ()=>{
  const userID = userDeleteID.value;

fetch(`${endpoint}/${userID}`, {
  method: "DELETE",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    displayUsers([data], userOutputDelete);
  })
  .catch((err) => console.error("Error:", err));
})