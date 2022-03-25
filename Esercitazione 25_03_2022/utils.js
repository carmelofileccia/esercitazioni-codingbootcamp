const createCard = (id, title, desc, imgUrl, price) => {
  const divEl = document.createElement("div");
  const h3El = document.createElement("h3");
  const parDescEl = document.createElement("p");
  const imgEl = document.createElement("img");
  const parPriceEl = document.createElement("p");

  divEl.classList.add("card");
  divEl.setAttribute("id", id);

  parPriceEl.classList.add("price");
  parDescEl.classList.add("description");

  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", "img cosi");
  h3El.textContent = title;
  parDescEl.textContent = desc;
  parPriceEl.textContent = price;

  divEl.append(imgEl, h3El, parDescEl, parPriceEl);
  document.querySelector(".wrapperMovies").appendChild(divEl);
};

// export { createCard };

const createModale = (title, desc, imgUrl, Year = 0) => {
  const modalWrapper = document.querySelector(".modalWrapperTest");

  modalWrapper.innerHTML = `
  <div class="modal">
    <div class="modalCard"> 
      <p class="modalTitle">${title}</p>
      <img class="modalImage" src=${imgUrl}/>
      <p class="modalDescription">${desc}</p>
    </div>
  <div>
  `;

  const modal = document.querySelector(".modal");

  modal.addEventListener("click", () => {
    modalWrapper.innerHTML = ``;
  });
};

export { createCard, createModale };
