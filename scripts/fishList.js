import { database } from './aquariumData.js';

export const fishList = () => {
    let fishHTML = '';

    for (const fish of database.fish) {
        fishHTML += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.name} poster" class="fish__image">
                <div class="fish__details">
                    <h2 class="fish__title">${fish.name}</h2>
                    <h3 class="fish__description">${fish.location}</h3>
                </div>
            </article>
        `;
    }

    return fishHTML
};

export const renderFishToDOM = (fishHTML) => {
    const fishList = document.getElementById('fishList');

    if (fishList) {
        fishList.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "fishList"')
    }
};