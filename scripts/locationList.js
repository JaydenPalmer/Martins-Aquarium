import { database } from "./aquariumData.js";

export const locationList = () => {
    let locationHTML = ''

    for (const location of database.locations) {
        locationHTML += `
            <article class="locations">
                <section class="location">
                ${location.name} is located in ${location.country}. ${location.description}
                </section>
            </article>
        `;
    }
    return locationHTML
};

export const renderLocationToDOM = (locationHTML) => {
    const locationList = document.getElementById('locationList');

    if (locationList) {
        locationList.innerHTML = locationHTML
    } else {
        console.error('Could not find element with id "locationList"')
    }
};