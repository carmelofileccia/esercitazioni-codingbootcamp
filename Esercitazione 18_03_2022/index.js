document.addEventListener("DOMContentLoaded", () => {

    const people = [
        "Luke Skywalker - Star Wars",
        "Jack Burton - Grosso guaio a Chinatown",
        "Jhonny Silverhad - Cyberpunk 2077",
        "Bilbo Baggins - Il signore degli anelli",
        "Rick Sanchez - Rick & Morty",
        "Master Chief - Halo",
        "Eleven - Stranger Things",
    ];

    const ul = document.querySelector("#personList");
    const input = document.querySelector("input");
    // const inputUrl = document.querySelector('#inputUrl');
    const inputName = document.querySelector('#inputName');
    const inputWorld = document.querySelector('#inputWorld');
    const submit = document.querySelector('#submit');

    const render = () => {

        const listArr = people.map((element) => `<li class="card">${element}</li>`);
        ul.innerHTML = listArr.join("");
    };
    render();
    input.addEventListener("keyup", () =>{
        const match = people.filter ((element) => element.toLowerCase().includes(input.value))
        ul.innerHTML = match.map((element) => `<li>${element}</li>`).join("");
        
    });
{/* <img src="${character.Immagine}"></img> */}
    const renderPerson = () => {
        const submitPerson = people.map((character) => `
            <p>${character.Name}</p>
            <p>${character.Text}</p>
            <p>${character.world}</p>`
        ); 

        personList.innerHTML = submitPerson.join();
    };

    submit.addEventListener('click', () => {
        people.push([inputName.value, inputWorld.value].join(" - ")
        );
        console.log(people);
        render();
    });

});