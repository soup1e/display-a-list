export function renderPeople(person) {
    const li = document.createElement('li');
    li.classList.add('people-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = person.name;

    const pEl = document.createElement('p');
    pEl.textContent = person.job + '' + person.age;

    li.append(headerEl, pEl);

    return li;
}
