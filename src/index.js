
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';



const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector("#search-box" );
const ulEl = document.querySelector(".country-list");


inputEl.addEventListener("input", debounce(event => {
    const country = event.target.value;
    if (country !== "") {
       fetchCountries(country).then(countries => {
        if (countries.length > 10) {
            Notify.warning("Too many matches found. Please enter a more specific name.");
        } else if (countries.length > 0) {
        const template = countries.map(item => {
            return `<li><img src='${item.flags.svg}'/><h2>${item.name.official}</h2></li>`
        }).join("");

        ulEl.innerHTML = template;
            
        }
    else {

        коли пуста строка - маємо все затерти. innerHTML = "";

    }
    }); 
    }
    
    
}, DEBOUNCE_DELAY));

//  коли 1 приходить - тоді в дівчік. 
//  
