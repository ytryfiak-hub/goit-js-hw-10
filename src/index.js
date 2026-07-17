import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import "./style.css";

const breedSelect = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const loader = document.querySelector(".loader");
const errorMessage  = document.querySelector(".error");

breedSelect.classList.add("is-hidden");
errorMessage .classList.add("is-hidden");
catInfo.classList.add("is-hidden");

fetchBreeds()
.then(breeds => {
    const markup = breeds
    .map(breed => {
        return`
        <option value="${breed.id}">
        ${breed.name} 
        </option>
        `;
    })
    .join("");

    breedSelect.insertAdjacentHTML("beforeend", markup);

    breedSelect.classList.remove("is-hidden");
})
.catch(error => {
    console.log(error);

    errorMessage.classList.remove("is-hidden");
})
 .finally(() => {
    loader.classList.add("is-hidden");
  });

breedSelect.addEventListener("change", event => {
    const breedId = event.currentTarget.value;
   
    loader.classList.remove("is-hidden");
    catInfo.classList.add("is-hidden");
    errorMessage .classList.add("is-hidden");
   
    fetchCatByBreed(breedId)
    .then(cat => {
      const markup = `
      <img src="${cat[0].url}" alt="cat image">
      
      <h2> ${cat[0].breeds[0].name} </h2>
      
      <p> ${cat[0].breeds[0].description} </p>

      <p> 
      <b> Temperament </b>
      ${cat[0].breeds[0].temperament}
      </p>
      `;
      catInfo.innerHTML = markup;

       catInfo.classList.remove("is-hidden");
    })

    .catch(error => {
      console.log(error);

      errorMessage.classList.remove("is-hidden");
    })
    .finally(() => {
      loader.classList.add("is-hidden");
    });
});