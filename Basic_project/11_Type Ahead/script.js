
const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
// console.log(cities);

fetch(endpoint)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data));

function findMatch(worldToMatch, cities) {
    const regex = new RegExp(worldToMatch, "gi");
    return cities.filter((place) => {
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatchs() {
    const matchArray = findMatch(this.value, cities);
    // console.log(matchArray);
    const html = matchArray
        .map((place) => {
            const regex = new RegExp(this.value, "gi");
            const cityName = place.city.replace(
                regex,
                `<span class='hl'>${this.value}</span>`
            );
            const stateName = place.state.replace(
                regex,
                `<span class='hl'>${this.value}</span>`
            );

            return `
    <li>
      <span classname='name'>${cityName} , ${stateName} </span>
      <span classname='population'>${place.population} </span>
    </li>
    `;
        })
        .join("");
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatchs);

searchInput.addEventListener("keyup", displayMatchs);
