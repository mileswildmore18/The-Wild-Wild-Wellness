let apikey = '7d3bff7bd1mshf07209b4c87620fp1a8bf8jsne5b3b63b54ea';
let foodDiets = [];
const loseBFUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&minProtein=30&maxFat=10';
const loseWtUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&minProtein=30&maxFat=10';
const gainMusUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&minProtein=30&maxFat=10';
const mainMusUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&minProtein=30&maxFat=10';

function makeDDL () {
    const options = ["Lose Body Fat", "Lose Weight", "Gain Muscle", "Maintain Muscle"];
    console.log(options);
    for (const option of options) {
        console.log(option);
        let foodList = document.querySelector('#dropdown2')
        let foodOption = document.createElement("li");
        let aEl2 = document.createElement("a");
        aEl2.setAttribute("href",'#!');
        aEl2.textContent = option;
        foodOption.appendChild(aEl2);
        foodList.appendChild(foodOption)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems2 = document.querySelectorAll('.dropdown-trigger2');
    M.Dropdown.init(elems2, {
        hover: true,
        coverTrigger: false,        
    });
    makeDDL();
  }); 



//Adds event listener to the dropdown of the foods to select for the necessary diet for the user's choice
// document.addEventListener('DOMContentLoaded', () => {
//     const dd2 = document.querySelector("#dropdown2");
//     dd2.addEventListener('click', (event) => {
     // let selectedFood = event.target.textContent;
//         fetchFoods(selectedFood);
//     });
// });

//This will fetch the selected foods for diet based on user's goals.
// function fetchFoods(selectedFood) {
    // if (selectedFood === "Lose Body Fat") {
    //     loseBF();
    // } else if (selectedFood === "Lose Weight") {
    //     loseWt();
    // } else if (selectedFood === "Gain Muscle") {
    //     gainMus();
    // } else {
    //     mainMus();
    // }
//     const foodURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients${selectedFood}?limitLicense=false&minProtein=30&maxFat=10&appid=${apikey}`
//     fetch(foodURL, {
//         method: 'GET',
//         headers: {
//             "X-RapidAPI Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//             "X-RapidAPI-Key": apikey
//         }
//     })
//     .then(response => response.json())
//     //Narrowing down data returned to the first entry that lists food for diet
//     .then(data => {
//         let chosenFood = data.find((add) >= add.foodChoice === "food diets")
//         foodCard(chosenFood);
//     });
// }


//Fills the card with info from the API fetch and appends to the page
// function foodCard(chosenFood) {
//     let dietCard = document.querySelector(".foodCard");
//     let foodName = document.createElement("p");
//     let foodTarget = document.createElement("p");
//     let foodInfo = document.createElement("p");
//     let foodPhoto = document.createElement("a");

//     foodName.textContent = chosenFood.foodName;
//     foodTarget.textConent = chosenFood.foodTarget;
//     foodInfo.textContent = chosenFood.foodInfo;
//     foodPhoto.setAttribute = ("href", chosenFood.foodPhotoUrl);

//     dietCard.appendChild(foodName);
//     dietCard.appendChild(foodTarget);
//     dietCard.appendChild(foodInfo);
//     dietCard.appendChild(foodPhoto);

//     console.log(chosenFood);
// }

// makeDDL();

// getAPI();

// function getAPI () {
//     fetch(queryurl, {
//         method: 'GET',
//         headers: {
//         "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//         "X-RapidAPI-Key": apikey,
//         }
//     })
//         .then(function (response) {
//         return response.json();
//         })
//         .then(function (foodDiets) {
            
//             for (const foodDiet of foodDiets){
//                 console.log(foodDiet);
                
//             }
//         });
// }