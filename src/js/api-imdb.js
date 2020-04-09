import ar from '../assets/ba-test/message.json';

var films = [];
for (let i = 0; i < ar.list.length; i++) {
  var film = ar.list[i].substring(0, ar.list[i].indexOf(' -'));
  films.push(film);
}

let randomNumber = Math.floor((Math.random() * films.length - 1) + 1);

let randomMovie = films[randomNumber];

function apiCall() {
  $.getJSON('http://www.omdbapi.com/?apikey=b854e1ce&s=' + encodeURI(randomMovie)).then(function(response){})
}
apiCall();
  

let list = document.getElementsByClassName("slider__item")[0];



/*films.map(film => (
<div>{film}<div>
)*/


//const imdb = require('imdb-api')
//imdb.get({name: randomMovie}, {apikey: 'b854e1ce', timeout: 30000}).then(console.log).catch(console.log);

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




