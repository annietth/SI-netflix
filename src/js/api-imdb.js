import ar from '../assets/ba-test/message.json';
const imdb = require('imdb-api')
console.log(ar);

let randomNumber = Math.floor((Math.random() * ar.list.length - 1) + 1);

let randomMovie = ar.list[randomNumber];
console.log(randomMovie);



function apiCall() {
  //imdb.get({name: randomMovie}, {apikey: 'b854e1ce', timeout: 30000}).then(console.log).catch(console.log);
  $.getJSON('http://www.omdbapi.com/?apikey=b854e1ce&i=' + encodeURI(randomMovie)).then(function(response))
}
  apiCall();
let list = document.getElementsByClassName("slider__item")[0];

//list.push(apiCall());

/*'http://www.omdbapi.com/?i=' + encodeURI(randomMovie) + 'apikey=b854e').then(function (response) {
    let image = response.Poster;
    console.log(response);
  });*/





/*bij.split("").forEach((string, index) => {
  bij2 = new Text();
  list.appendChild(bij2);
});

liste();
console.log(list)*/

/*function liste(){
  let list = document.getElementsByClassName("slider__item")[0];*/

  /*axios.get('./test.js')
    .then((re) => {
      console.log(re.data)
    })
    .catch((e) => {
      console.log(e);
    });*/




