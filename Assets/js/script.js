
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
                console.log(data);
                bodyPart = data;
                console.log(bodyPart);
                for (const part of bodyPart){
                    console.log(part);
                    let ddlList = document.querySelector("#ddl");
                    let option = document.createElement("option");
                    option.textContent = part;
                    ddlList.appendChild(option)
                }
        });
}

{/* <select name="dropdown" id="ddl">Dropdown</select> */}


getAPI();
