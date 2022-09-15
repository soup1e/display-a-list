import { foods } from './data-foods.js';
import { renderFood } from './render-foods.js';

import { animals } from './data-animals.js';
import { renderAnimal } from './render-animals.js';

import { sports } from './data-sports.js';
import { renderSport } from './render-sports.js';

import { people } from './data-people.js';
import { renderPeople } from './render-people.js';

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

const sportList = document.getElementById('sports-list');

function displaySports() {
    sportList.innerHTML = '';

    for (let sport of sports) {
        const sportEl = renderSport(sport);
        sportList.append(sportEl);
    }
}

const peopleList = document.getElementById('people-list');

function displayPerson() {
    peopleList.innerHTML = '';

    for (let person of people) {
        const personEl = renderPeople(person);
        peopleList.append(personEl);
    }
}

displayPerson();
displayFoods();
displayAnimal();
displaySports();
