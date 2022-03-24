import createCard from "./utils.js";

const formatMinText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";

const getMoviesData = async () => {
  const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status >= 200 && res.status <= 299) {
    return await res.json();
  } else {
    const h1El = document.createElement("h1");
    h1El.textContent = "Lista Film non Tovata :(";
    document.body.append(h1El);
  }
};

getMoviesData().then((resultAPI) => {
  resultAPI.map((movie) =>
    createCard(
      movie.id,
      movie.title,
      formatMinText(movie.description),
      movie.poster,
      movie.year
    )
  );
});

const titleInputEl = document.getElementById("title");
const descInputEl = document.getElementById("description");
const posterInputEl = document.getElementById("poster");
const yearInputEl = document.getElementById("year");
const submitInputEl = document.getElementById("submit");

submitInputEl.classList.add("subBtn")

submitInputEl.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: descInputEl.value,
      genres: ["animation"],
      poster: posterInputEl.value,
      title: titleInputEl.value,
      year: yearInputEl.value,
    }),
  }).then((data) => {
    location.reload();

  });
});
