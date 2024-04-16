
let APIKey = "7d3bff7bd1mshf07209b4c87620fp1a8bf8jsne5b3b63b54ea";
let bodyPart = [];
const queryURL = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=5&appid=${APIKey}`;

// fetches list of body parts from API -N


// Fetching the data on the exercise for specific body parts based on the API Key

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
    const exerciseURL = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}?appid=${APIKey}`;
    fetch(exerciseURL, {
        method: 'GET',
        headers: {
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            "X-RapidAPI-Key": APIKey
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); 
    });
}

getAPI();




