const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint) /*fetch returns a promise*/
    .then(blob => blob.json()) /*returned data from fetch and converts to a json that will be used next*/
    .then(data => cities.push(...data)) /*creates an array with all the cities using the previous promise converted*/

function findMatches(wordMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}
