import { foods } from './data-foods.js';
import { renderFood } from './render-foods.js';

import { animals } from './data-animals.js';
import { renderAnimal } from './render-animals.js';

const foodList = document.getElementById('foods-list');

function displayFoods() {
    foodList.innerHTML = '';

    for (let food of foods) {
        const foodEl = renderFood(food);
        foodList.append(foodEl);
    }
}

const animalList = document.getElementById('animals-list');

function displayAnimal() {
    animalList.innerHTML = '';

    for (let animal of animals) {
        const animalEl = renderAnimal(animal);
        animalList.append(animalEl);
    }
}

displayFoods();
displayAnimal();
