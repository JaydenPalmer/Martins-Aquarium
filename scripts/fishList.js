import { database } from './aquariumData.js';


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ''

    for (const fish of database.fish) {
        if (fish.length % 3 == 0) {
            holyFish += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.name} poster" class="fish__image">
                <div class="fish__details">
                    <h2 class="fish__title">${fish.name}</h2>
                    <h3 class="fish__description">${fish.location}</h3>
                </div>
            </article>
        `;
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFish = ''

    for (const fish of database.fish) {
        if (fish.length % 5 == 0) {
            soldierFish += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.name} poster" class="fish__image">
                <div class="fish__details">
                    <h2 class="fish__title">${fish.name}</h2>
                    <h3 class="fish__description">${fish.location}</h3>
                </div>
            </article>
        `;
        }
    }

    return soldierFish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFish = ''

    for (const fish of database.fish) {
        if ((fish.length % 3) && (fish % 5) !== 0) {
            regularFish += `
                    <article class="fish">
                        <img src="${fish.image}" alt="${fish.name} poster" class="fish__image">
                        <div class="fish__details">
                            <h2 class="fish__title">${fish.name}</h2>
                            <h3 class="fish__description">${fish.location}</h3>
                        </div>
                    </article>
                `;
                }
            }
        
            return regularFish
}

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