import { fishList } from './fishList.js';
import { renderFishToDOM } from './fishList.js';
import { tipList } from './tipList.js';
import { renderTipToDOM } from './tipList.js';
import { locationList } from './locationList.js'
import { renderLocationToDOM } from './locationList.js'
import { mostHolyFish } from './fishList.js';
import { soldierFish } from './fishList.js';
import { regularFish } from './fishList.js';

// Generate the fish list
//const fishHTML = fishList();
const mostHolyFishHTML = mostHolyFish()
const soldierFishHTML = soldierFish()
const regularFishHTML = regularFish()


// Generate the care tips
const tipHTML = tipList();

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
//renderFishToDOM(fishHTML);
renderFishToDOM(mostHolyFishHTML + soldierFishHTML + regularFishHTML)
renderTipToDOM(tipHTML);
renderLocationToDOM(locationHTML)