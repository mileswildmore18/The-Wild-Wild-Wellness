let apikey = '7d3bff7bd1mshf07209b4c87620fp1a8bf8jsne5b3b63b54ea';
const loseBFUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&minProtein=30&maxFat=10';
const loseWtUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&minProtein=30&maxFat=10';
const gainMusUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&minProtein=30&maxFat=10';
const mainMusUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&minProtein=30&maxFat=10';

// Creates the options for the diet dropdown list -N
function makeDDL () {
    const options = ["Lose Body Fat", "Lose Weight", "Gain Muscle", "Maintain Muscle"];
    for (const option of options) {
        let foodList = document.querySelector('#dropdown2')
        let foodOption = document.createElement("li");
        let aEl2 = document.createElement("a");
        aEl2.setAttribute("href",'#!');
        aEl2.textContent = option;
        foodOption.appendChild(aEl2);
        foodList.appendChild(foodOption)
    }
}

// Causes the dropdown list to display when diet button is hovered over -N
document.addEventListener('DOMContentLoaded', function() {
    var elems2 = document.querySelectorAll('.dropdown-trigger2');
    M.Dropdown.init(elems2, {
        hover: true,
        coverTrigger: false,        
    });
    makeDDL();
  }); 

// Adds event listener to the dropdown, calls for fetch request -N
document.addEventListener('DOMContentLoaded', () => {
    const dd2 = document.querySelector("#dropdown2");
    dd2.addEventListener('click', (event) => {
     let selectedFood = event.target.textContent;
        fetchFoods(selectedFood);
    });
});

//Calls for individual fetch request based on selection -N
function fetchFoods(selectedFood) {
    if (selectedFood === "Lose Body Fat") {
        loseBF(selectedFood);
    } else if (selectedFood === "Lose Weight") {
        loseWt(selectedFood);
    } else if (selectedFood === "Gain Muscle") {
        gainMus(selectedFood);
    } else {
        mainMus(selectedFood);
    }
}

// Makes fetch request for option "Lose Body Fat" -N
function loseBF(selectedFood) {
    console.log(selectedFood);
    fetch(loseBFUrl, {
        method: 'GET',
        headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": apikey,
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        getRecipe(data);        
    }) 
}

// Makes fetch request for option "Lose Weight" -N
function loseWt(selectedFood) {
    console.log(selectedFood);
    fetch(loseWtUrl, {
        method: 'GET',
        headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": apikey,
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        getRecipe(data);        
    })
}

// Makes fetch request for option "Gain Muscle" -N
function gainMus(selectedFood) {
    console.log(selectedFood);
    fetch(gainMusUrl, {
        method: 'GET',
        headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": apikey,
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        getRecipe(data);        
    })
}

// Makes fetch request for option "Maintain Muscle" -N
function mainMus(selectedFood) {
    console.log(selectedFood);
    fetch(mainMusUrl, {
        method: 'GET',
        headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": apikey,
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        getRecipe(data);        
    })
}

// Takes name of recipe and makes new fetch for actual recipe
// Our original fetch returned the name, img, and nutrient values, but not the actual recipe -N
function getRecipe(data) {
    console.log(data);
    let foodRec = data[Math.floor(Math.random()*data.length)];
    console.log(foodRec);
    let recipeName = foodRec.title;
    console.log(recipeName);
}

//Fills the card with info from the API fetch and appends to the page -M
function foodCard() {
    let dietCard = document.querySelector(".foodCard");
    let foodName = document.createElement("p");
    let foodTarget = document.createElement("p");
    let foodInfo = document.createElement("p");
    let foodPhoto = document.createElement("a");

    foodName.textContent = chosenFood.foodName;
    foodTarget.textConent = chosenFood.foodTarget;
    foodInfo.textContent = chosenFood.foodInfo;
    foodPhoto.setAttribute = ("href", chosenFood.foodPhotoUrl);

    dietCard.appendChild(foodName);
    dietCard.appendChild(foodTarget);
    dietCard.appendChild(foodInfo);
    dietCard.appendChild(foodPhoto);

    console.log(chosenFood);
}