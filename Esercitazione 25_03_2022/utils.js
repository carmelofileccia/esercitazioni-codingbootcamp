const createCard = (id, title, desc, imgUrl, price) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const parPriceEl = document.createElement("p");
  
    divEl.classList.add("card");
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
  

const createModale = () => {
  const modalDiv = document.createElement("div");
  const modalImg = document.createElement("img");
  const modalTitle = document.createElement("title");
  const modalDesc = document.createElement("p")
  const modalYear = document.createElement ("p");

  modalDiv.classList.add("cardModal");
  modalImg.classList.add("ImgModal");
  modalTitle.classList.add("titleModal");
  modalDesc.classList.add("descModal");
  modalYear.classList.add("yearModal");


  modalImg.setAttribute("src", imgUrl);
  modalImg.setAttribute("atl", "Immagine non caricata correttamente")
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  modalYear.textContent = Year;

  modalDiv.appendChild(modalImg, modalTitle, modalDesc, modalYear);
  modalDiv.querySelector(".modalWrapper").appendChild(modalDiv);
}

export {createCard, createModale};