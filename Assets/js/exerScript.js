
let APIKey = "26366cdce0mshac69a128060d37ep109ca6jsnc544b844f769";
let bodyPart = [];
const queryURL = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList?appid=${APIKey}`;

// fetches list of body parts from API -N
function getAPI () {
    fetch(queryURL, {
        method: 'GET',
        headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": APIKey,
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

//   Returns the option clicked in the dropdown menu and calls the new fetch function -N
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
            "X-RapidAPI-Key": APIKey
        }
    })
    .then(response => response.json())
    // Narrows down data returned to just the first entry listing equipment of "body weight" -N
    .then(data => {
        let exercise = data.find((equip) => equip.equipment === "body weight");
        exerCard(exercise);
    });
}

// Fills card with info from the API fetch and appends to the page
function exerCard(exercise) {
    let card = document.querySelector(".card");
    let name = document.createElement("div");
    let target = document.createElement("div");
    let equipment = document.createElement("div");
    let instructions = document.createElement("div");
    let gif = document.createElement("img");

    name.textContent = exercise.name;
    target.textContent = exercise.target;
    equipment.textContent = exercise.equipment;
    instructions.textContent = exercise.instructions;
    gif.src = exercise.gifUrl;

    card.appendChild(gif);
    card.appendChild(name);
    card.appendChild(target);
    card.appendChild(equipment);
    card.appendChild(instructions);

    // console.log(exercise);
    // // console.log(exercise.name);
    // // console.log(exercise.target);
    // // console.log(exercise.equipment);
    // // console.log(exercise.instructions); 
    // console.log(exercise.gifUrl);
    
    // let gifFetchURL = exercise.gifUrl;
    // fetch(gifFetchURL, {
    //     method: 'GET',
    //     headers: {
    //         "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    //         "X-RapidAPI-Key": APIKey
    //     }
    // }) 
    // .then(response => response.blob())
    // .then((blob) => {
    //     console.log(blob);
    // });
}

getAPI();




