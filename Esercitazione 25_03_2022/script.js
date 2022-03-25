import { createCard, createModale } from "./utils.js";
import { getMoviesData } from "./api.js";

const formatMinText = (text) =>
  text && text.split(" ").slice(0, 6).join(" ") + " ...";

// Elementi relativi alla modale
// const modalEl = document.querySelector(".modalWrapper");
// const overlayEl = document.querySelector(".overlay");

// Elementi relativi al form
const titleInputEl = document.getElementById("title");
const descInputEl = document.getElementById("description");
const posterInputEl = document.getElementById("poster");
const yearInputEl = document.getElementById("year");
const submitInputEl = document.getElementById("submit");

// questa è un IIFE ( https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
(async function () {
  const movies = await getMoviesData();

  movies.map((movie) =>
    createCard(
      movie.id || "00",
      movie.title || "Non definito",
      formatMinText(movie.description) || "Non definito",
      movie.poster || "",
      movie.year || ""
    )
  );

  const cardsEl = document.querySelectorAll(".card");

  cardsEl.forEach((card) => {
    card.addEventListener("click", (element) => {
      console.log(element.currentTarget);

      const selectedCard = movies.find(
        (el) => el.id === Number(element.currentTarget.id)
      );

      console.log(selectedCard);
      createModale(
        selectedCard.title,
        selectedCard.description,
        selectedCard.poster
      );
    });
  });
})();
