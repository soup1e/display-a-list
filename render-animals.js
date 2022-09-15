export function renderAnimal(animal) {
    const li = document.createElement('li');
    li.classList.add('animal-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = animal.name;

    const pEl = document.createElement('p');
    pEl.textContent = animal.food + '' + animal.type;

    li.append(headerEl, pEl);

    return li;
}
