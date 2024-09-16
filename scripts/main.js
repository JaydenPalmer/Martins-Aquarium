import { fishList } from './fishList.js';
import { renderFishToDOM } from './fishList.js';
import { tipList } from './tipList.js';
import { renderTipToDOM } from './tipList.js';
import { locationList } from './locationList.js'
import { renderLocationToDOM } from './locationList.js'

// Generate the fish list
const fishHTML = fishList();



// Generate the care tips
const tipHTML = tipList();

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
renderFishToDOM(fishHTML);
renderTipToDOM(tipHTML);
renderLocationToDOM(locationHTML)