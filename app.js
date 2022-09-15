import { foods } from './data-foods.js';
import { renderFood } from './render-foods.js';

const foodList = document.getElementById('foods-list');

function displayFoods() {
    foodList.innerHTML = '';

    for (let food of foods) {
        const foodEl = renderFood(food);
        foodList.append(foodEl);
    }
}

displayFoods();
