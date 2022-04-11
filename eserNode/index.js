const { writeFile } = require('fs');

const fs = require('fs').promises;

async function ReadFile(file) {
    const data = await fs.readFile(file);
    const dataToString = data.toString();
    console.log(dataToString);
}

async function WriteFile(content) {
    await fs.writeFile('list.txt', content, {flag: 'a+'})
}

async function WriteAndRead() {
    await WriteFile("PRODOTTO:" + " "+ "carne" + " - "+ "QNT:" + " " + "1 Kg \n");
    await ReadFile('list.txt');

}

WriteAndRead()
// const list =document.getElementById("list");
// list.innerHTML = (`<li>${dataToString}</li>`)