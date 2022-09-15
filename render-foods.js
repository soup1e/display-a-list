export function renderFood(food) {
    const li = document.createElement('li');
    li.classList.add('food-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = food.name;

    const pEl = document.createElement('p');
    pEl.textContent = food.flavor + '' + food.type;

    li.append(headerEl, pEl);

    return li;
}
