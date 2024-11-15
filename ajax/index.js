
var httpRequest;
document.getElementById("ajaxButton").addEventListener('click', makeRequest);

function makeRequest() {
httpRequest = new XMLHttpRequest();

if (!httpRequest) {
alert('Giving up :( Cannot create an XMLHTTP instance');
return false;
}
httpRequest.onreadystatechange = alertContents;
httpRequest.open('GET', 'test.html');
httpRequest.send();
}

function alertContents() {
if (httpRequest.readyState === XMLHttpRequest.DONE) {
if (httpRequest.status === 200) {
alert(httpRequest.responseText);
} else {
alert('There was a problem with the request.');
}
}
}

To obtain the JSON, we use an API called XMLHttpRequest (often called XHR). This is a very useful JavaScript object that allows us to make network requests to retrieve resources from a server via JavaScript (e.g. images, text, JSON, even HTML snippets),

let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
const superHeroesText = request.response; // get the string from the response
const superHeroes = JSON.parse(superHeroesText); // convert it to an object
populateHeader(superHeroes);
showHeroes(superHeroes);
}

XMLHttpRequest.prototype.send()