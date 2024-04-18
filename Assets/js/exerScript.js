let APIKey = "7d3bff7bd1mshf07209b4c87620fp1a8bf8jsne5b3b63b54ea";
let APIKey2 = "e561b50d73msh4314686b2659048p15c1b7jsn62d6f7f29522";
let APIKey3 = "26366cdce0mshac69a128060d37ep109ca6jsnc544b844f769";

let bodyPart = [];
const queryURL = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList?appid=${APIKey2}`;

// fetches list of body parts from API -N
function getAPI () {
    fetch(queryURL, {
        method: 'GET',
        headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": APIKey2,
        }
    })    
        .then(function (response) {
            return response.json();
        })
        .then(function (bodyPart) {
            // for each body part, creates option in dropdown menu -N
                for (const part of bodyPart){
                    let ddlList = document.querySelector("#dropdown1");
                    let option = document.createElement("li");
                    let aEl = document.createElement("a");
                    aEl.setAttribute("href","#!");
                    aEl.textContent = part;
                    option.appendChild(aEl);
                    ddlList.appendChild(option)
                }
        });
}

// Makes the dropdown menu appear when cursor hovers over 'exercise' -N
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {
        hover: true,
        coverTrigger: false,        
    });
  });

// Returns the option clicked in the dropdown menu and calls the new fetch function -N
document.addEventListener('DOMContentLoaded', () => {
    const ddl = document.querySelector("#dropdown1");
    ddl.addEventListener('click', (event) => {
        let selectedBodyPart = event.target.textContent;
        console.log(selectedBodyPart);
        fetchExercises(selectedBodyPart);
    });
});

// Fetches exercises based on the selected body part -N
function fetchExercises(selectedBodyPart) {
    const exerciseURL = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}?limit=200&appid=${APIKey}`;
    fetch(exerciseURL, {
        method: 'GET',
        headers: {
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            "X-RapidAPI-Key": APIKey2,
        }
    })
    .then(response => response.json())
    // Keeps randomly choosing exercises until it finds one listing equipment of "body weight" -N
    .then(data => {
        let exercise = data[Math.floor(Math.random()*data.length)];
        while (exercise.equipment !== "body weight"){
            exercise = data[Math.floor(Math.random()*data.length)];
        }
        console.log(exercise);

        exerCard(exercise);
    });
}

// Fills card with info from the API fetch and appends to the page -N
function exerCard(exercise) {
    let excard = document.querySelector(".card");
    empty(excard);
    let name = document.createElement("div");
    let target = document.createElement("div");
    let instructions = document.createElement("div");
    let gif = document.createElement("img");

    name.textContent = exercise.name;
    target.textContent = exercise.target;
    instructions.textContent = exercise.instructions;
    gif.src = exercise.gifUrl;

    excard.appendChild(gif);
    excard.appendChild(name);
    excard.appendChild(target);
    excard.appendChild(instructions);
}

// Removes all the child elements in the card, 
// run right before putting in the new content -N
function empty(element) {
    while(element.firstElementChild) {
        element.firstElementChild.remove();
    }
}

getAPI();




