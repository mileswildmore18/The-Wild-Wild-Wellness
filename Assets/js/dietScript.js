let apikey = '7d3bff7bd1mshf07209b4c87620fp1a8bf8jsne5b3b63b54ea';
let foodDiets = [];
const queryurl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&minProtein=30&maxFat=10';


function getAPI () {
    fetch(queryurl, {
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
            console.log(data);
            for (const foodDiet of foodDiets){
                console.log(foodDiet);
                let foodList = document.querySelector()
            }
        })
}

 

getAPI();
//This will fetch the selected foods for diet based on user's goals.
function fetchFoods(selectedFood) {
    const foodURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients${selectedFood}?limitLicense=false&minProtein=30&maxFat=10&appid=${apikey}`
    fetch(foodURL, {
        method: 'GET',
        headers: {
            "X-RapidAPI Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "X-RapidAPI-Key": apikey
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
//Adds event listener to the dropdown of the foods to select for the necessary diet for the user's choice
document.addEventListener('Food', () => {
    loadFoodDiet();
    const dd2 = document.querySelector("dropdown2");
    dd2.addEventListener('diet', (event) => {
        fetchFoods(event.target.value);
    });
});