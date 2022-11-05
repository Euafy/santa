"use strict";
const christmasLights = document.querySelectorAll(".christmas-light");
const radioContainer = document.querySelector(".radio-container");
const form = document.querySelector("#f-nume");
const namesArray = [{
    name: "marcel",
    voted: false,
    wasVoted: false
}, {
    name: "dodo",
    voted: false,
    wasVoted: false
}, {
    name: "virgil",
    voted: false,
    wasVoted: false
}, {
    name: "mircea",
    voted: false,
    wasVoted: false
}];
const inputName = document.querySelector(".input-name");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const radio = [...document.querySelectorAll(".radio-container input[type='radio']")].find(e => e.checked === true);
    namesArray.forEach(e => {
        if(e.name === radio.value) {
            e.voted = true;
        }
    })
    const randomElement = namesArray[Math.floor(Math.random() * namesArray.length)];
    console.log(randomElement.name)
})
const createRadioInputs = (namesArray) => {
    return namesArray.map(({name}) => {
        const newInput = document.createElement("input");
        const newLabel = document.createElement("label");
        const labelDescription = document.createTextNode(name);
        newInput.type = "radio";
        newInput.name = "chooser-name";
        newInput.id = name;
        newInput.value = name;
        newInput.className = "radio";
        newLabel.htmlFor = name;
        newLabel.className = "label-radio";
        newLabel.appendChild(labelDescription);
        return [newInput, newLabel]
    })
}
inputName.addEventListener("input", (e) => {
    radioContainer.innerHTML = "";
    createRadioInputs(namesArray).forEach(array => {
        if(array[0].id.includes(inputName.value) ) {
            radioContainer.appendChild(array[0])
            radioContainer.appendChild(array[1])
        }
    })
})
window.addEventListener("load", (e) =>{
    const radioElements = createRadioInputs(namesArray).flat();
    radioElements.forEach(element => {
        radioContainer.appendChild(element)
    })
    setInterval (function() {
       for(let i = 0; i<christmasLights.length; i++) {
        switch(i) {
            case 0:
                christmasLights[i].classList.toggle("red");
                break;
            case 1:
                christmasLights[i].classList.toggle("green");
                break;
            case 2:
                christmasLights[i].classList.toggle("green");
                break;
            case 3:
                christmasLights[i].classList.toggle("red");
                break;
        }
       }
    }, 250)
})