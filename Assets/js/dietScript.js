let apikey = '7d3bff7bd1mshf07209b4c87620fp1a8bf8jsne5b3b63b54ea';
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
        })
}

getAPI();