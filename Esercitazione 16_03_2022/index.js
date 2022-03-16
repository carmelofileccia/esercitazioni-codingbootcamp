document.addEventListener("DOMContentLoaded", () => {

    const quotes = [
        "Io sono tuo padre!",
        "guerra nessuno fatto grande",
        "fare o non fare... non c'è provare",
        "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
        "Sto più in alto di te!",
        ".... (cit. Darth Maul)",
        "Eri come un fratello per me! (pianto)",
    ];

    const div = document.querySelector("#containerQuotes");
    document.querySelector("button").addEventListener("click", () =>{
            const randomN = Math.floor(Math.random() * quotes.length); 
            div.innerHTML = (quotes[randomN]);
        });
       
    
    const inputUrl = document.querySelector('#inputUrl');
    const inputName = document.querySelector('#inputName');
    const inputEmail = document.querySelector('#inputEmail');
    const inputText = document.querySelector('#inputText');
    const submit = document.querySelector('#submit');
    const commentsList = document.querySelector('#comments');

    const comments = [];

    const renderComments = () => {
        const commentItems = comments.map((comment) => `
            <img src="${comment.Immagine}">
            <p>${comment.Name}</p>
            <p>${comment.Email}</p>
            <p>${comment.Text}</p>`
        ); 

        commentsList.innerHTML = commentItems.join();
    };

    submit.addEventListener('click', () => {
        comments.push({
            Immagine:inputUrl.value, 
            Name:inputName.value, 
            Email:inputEmail.value, 
            Text:inputText.value,
        });
        console.log(comments);
        renderComments();
    });


});

