const createCard = (index, title, desc, imgUrl, price) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const parPriceEl = document.createElement("p");
    const delBtn = document.createElement("button")
  
    divEl.classList.add("card");
    parPriceEl.classList.add("price");
    parDescEl.classList.add("description");
    delBtn.classList.add("delBtn")
    h3El.classList.add("title");
    
    
    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "img cosi");
    h3El.textContent = title;
    parDescEl.textContent = desc;
    parPriceEl.textContent = price;
    delBtn.textContent = "Elimina Scheda Film";

    divEl.append(imgEl, h3El, parDescEl, parPriceEl, delBtn);
    document.querySelector(".wrapperMovies").appendChild(divEl);

    delBtn.addEventListener('click',() => {
        fetch(`https://edgemony-backend.herokuapp.com/movies/${index}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        }}).then (() => location.reload());
    })
  };
  export default createCard;