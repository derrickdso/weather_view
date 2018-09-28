const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
function get_weather()
{
  var zipcode =  document.getElementById('zipcode').value
  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',us&appid=d228cbc5ba70ff1aa1aa47460d2cacd3', true);
  request.onload = function () {
    // Begin accessing JSON data here
    console.log(this.response)

    //var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        
      data.forEach(movie => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.textContent = movie.title;

        const p = document.createElement('p');
        movie.description = movie.description.substring(0, 300);
        p.textContent = `${movie.description}...`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
      });
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Gah, it's not working!`;
      app.appendChild(errorMessage);
    }
  }

  request.send();
}