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
    if (request.status >= 200 && request.status < 400) {
      var response = JSON.parse(request.responseText);
      console.log(response)
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.textContent = `The Weather in ${response['name']}`;

        const p = document.createElement('p');
        p.textContent = `${response["weather"][0]["description"]}...`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Gah, it's not working!`;
      app.appendChild(errorMessage);
    }
  }

  request.send();
}