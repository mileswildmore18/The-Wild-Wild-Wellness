// Pulls the favorited exercises and recipes out of local storage -N
let recipeArray = JSON.parse(localStorage.getItem('recipeArray')) || [];
let exerciseArray = JSON.parse(localStorage.getItem('exerciseArray')) || [];

// Takes the favorited exercises out of local storage and puts them on cards on load -N
for (const exercise of exerciseArray) {
    let exCard = document.querySelector("#ex-card");
    let gif = document.createElement("img");
    gif.classList.add("card-image", "ex-img");
    let name = document.createElement("div");
    name.classList.add("card-title");
    let target = document.createElement("div");
    target.classList.add("card-content","target-part");
    let instructions = document.createElement("div");
    instructions.classList.add("card-content","ex-instructions");

    name.textContent = exercise.name;
    target.textContent = exercise.target;
    instructions.textContent = exercise.instructions;
    gif.src = exercise.gifUrl;

    exCard.appendChild(gif);
    exCard.appendChild(name);
    exCard.appendChild(target);
    exCard.appendChild(instructions);
}

// Takes the favorited recipes out of local storage and puts them on cards on load -N
for (const recipe of recipeArray) {
    let dietCard = document.querySelector("#food-card");
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

    foodName.textContent = recipe.title;
    foodCal.textContent = `Calories: ${recipe.calories}`; 
    foodFat.textContent = `Fat: ${recipe.fat}`; 
    foodProt.textContent = `Protein: ${recipe.protein}`;
    foodInst.textContent = recipe.instructions;
    foodPhoto.src = recipe.image;

    dietCard.appendChild(foodPhoto);
    dietCard.appendChild(foodName);
    dietCard.appendChild(macros)
    macros.appendChild(foodCal);
    macros.appendChild(foodFat);
    macros.appendChild(foodProt);
    dietCard.appendChild(foodInst);
}