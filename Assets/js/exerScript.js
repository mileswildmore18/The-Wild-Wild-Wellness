
let APIKey = "7d3bff7bd1mshf07209b4c87620fp1a8bf8jsne5b3b63b54ea";
let bodyPart = [];
const queryURL = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=5&appid=${APIKey}`;

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
        .then(function (data) {
                console.log(bodyPart);
                for(const part of bodyPart){
                }
                bodyPart = data;
                console.log(bodyPart);
                for (const part of bodyPart){
                    console.log(part);
                    let ddlList = document.querySelector("#dropdown1");
                    let option = document.createElement("li");
                    let aEl = document.createElement("a");
                    aEl.setAttribute("href","#!");
                    aEl.textContent = part[i];
                    option.appendChild(aEl);
                }
        });
}


// This function will fetch exercises based on the selected body part  when the page loads and populate a dropdown menu
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

// Added event listener to the dropdown to handle user selection
document.addEventListener('DOMContentLoaded', () => {
    loadBodyParts();
    const ddl = document.querySelector("#dropdown1");
    ddl.addEventListener('change', (event) => {
        fetchExercises(event.target.value);
    });
});



{/* <select name="dropdown" id="ddl">Dropdown</select> */}



getAPI();
