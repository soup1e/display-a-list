export function renderSport(sport) {
    const li = document.createElement('li');
    li.classList.add('sport-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = sport.name;

    const pEl = document.createElement('p');
    pEl.textContent = sport.equipment + '' + sport.players;

    li.append(headerEl, pEl);

    return li;
}
