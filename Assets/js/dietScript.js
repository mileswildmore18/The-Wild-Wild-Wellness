let apikey = '7d3bff7bd1mshf07209b4c87620fp1a8bf8jsne5b3b63b54ea';
let apikey2 = "e561b50d73msh4314686b2659048p15c1b7jsn62d6f7f29522";
const loseBFUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&maxAlcohol=0&maxSaturatedFat=10&maxFat=10';
const loseWtUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&maxAlcohol=0&maxFat=10&maxSugar=10';
const gainMusUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&maxAlcohol=0&minProtein=50&minCalories=800';
const mainMusUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&maxAlcohol=0&minProtein=30&minCalories=500';

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
        let selectedDiet = event.target.textContent;
        fetchFoods(selectedDiet);
    });
});

//Calls for individual fetch request based on selection -N
function fetchFoods(selectedDiet) {
    if (selectedDiet === "Lose Body Fat") {
        loseBF(selectedDiet);
    } else if (selectedDiet === "Lose Weight") {
        loseWt(selectedDiet);
    } else if (selectedDiet === "Gain Muscle") {
        gainMus(selectedDiet);
    } else {
        mainMus(selectedDiet);
    }
}

// Makes fetch request for option "Lose Body Fat" -N
function loseBF(selectedDiet) {
    fetch(loseBFUrl, {
        method: 'GET',
        headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": apikey2,
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (diet) {
        getRecipe(diet);        
    }) 
}

// Makes fetch request for option "Lose Weight" -N
function loseWt(selectedDiet) {
    fetch(loseWtUrl, {
        method: 'GET',
        headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": apikey2,
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (diet) {
        getRecipe(diet);        
    })
}

// Makes fetch request for option "Gain Muscle" -N
function gainMus(selectedDiet) {
    fetch(gainMusUrl, {
        method: 'GET',
        headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": apikey2,
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (diet) {
        getRecipe(diet);        
    })
}

// Makes fetch request for option "Maintain Muscle" -N
function mainMus(selectedDiet) {
    fetch(mainMusUrl, {
        method: 'GET',
        headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": apikey2,
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (diet) {
        getRecipe(diet);        
    })
}

// Takes name of recipe and makes new fetch for actual recipe
// Our original fetch returned the name, img, and nutrient values, but not the actual recipe -N
function getRecipe(diet) {
    let foodRec = diet[Math.floor(Math.random()*diet.length)];
    let recipeID = foodRec.id;
    const getRecipeUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeID}/information`;

    fetch(getRecipeUrl, {
        method: 'GET',
        headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": apikey2,
        }        
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let instructions = data.instructions; 
        // If foodRec returns a recipe that doesn't have instructions in the API, 
        // runs the fetch again until it finds a recipe with instructions -N
        if (instructions === null) {
            getRecipe(diet);
        } else {
            foodCard(foodRec, instructions)     
        }
    })
}

//Fills the card with info from the API fetch and appends to the page -N
function foodCard(foodRec, instructions) {
    let dietCard = document.querySelector("#food-card");
    empty(dietCard);
    let foodPhoto = document.createElement("img");
    foodPhoto.classList.add("card-image", "ex-img")
    let foodName = document.createElement("div");
    foodName.classList.add("card-title")
    let macros = document.createElement("div")
    macros.classList.add("card-content", "macros");
    let foodCal = document.createElement("div");
    foodCal.classList.add("card-content","calories");
    let foodFat = document.createElement("div");
    foodFat.classList.add("card-content","fat");
    let foodProt = document.createElement("div");
    foodProt.classList.add("card-content","protein");
    let foodInst = document.createElement("div");
    foodInst.classList.add("card-content","ex-instructions");
    let favDiet = document.createElement("i");
    favDiet.classList.add("small", "material-icons");

    favDiet.textContent = "star";
    foodName.textContent = foodRec.title;
    foodCal.textContent = `Calories: ${foodRec.calories}`; 
    foodFat.textContent = `Fat: ${foodRec.fat}`; 
    foodProt.textContent = `Protein: ${foodRec.protein}`;
    foodInst.textContent = instructions;
    foodPhoto.src = foodRec.image;

    dietCard.appendChild(foodPhoto);
    foodName.appendChild(favDiet);
    dietCard.appendChild(foodName);
    dietCard.appendChild(macros)
    macros.appendChild(foodCal);
    macros.appendChild(foodFat);
    macros.appendChild(foodProt);
    dietCard.appendChild(foodInst);

    foodInst.scrollIntoView({behavior: "smooth"});

    // Makes the favorite button turn yellow when clicked, 
    // and calls the function to store that exercise -N
    favDiet.addEventListener('click', () => {
        favDiet.classList.add("faveRec");
        storeFaveRec(foodRec, instructions);
    })
}

// Removes all the child elements in the card, 
// run right before putting in the new content -N
function empty(element) {
    while(element.firstElementChild) {
        element.firstElementChild.remove();
    }
}

// Sends favorite recipe to local storage -N
function storeFaveRec (foodRec, instructions) {
//    FoodRec is an object, and instructions is a string, 
//  so pushes instructions into FoodRec as a property,
// so it can be retrieved on the favorites page as one object -N
    foodRec.instructions = instructions;
    let recipeArray = JSON.parse(localStorage.getItem('recipeArray')) || [];
    recipeArray.push(foodRec);
    localStorage.setItem('recipeArray', JSON.stringify(recipeArray));
}