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
        const p = document.createElement('p');
        const img = document.createElement('img');
        let id = response["weather"][0]["id"];

        h1.textContent = `The Weather in ${response['name']}: ${response["weather"][0]["description"]}`;

        if(id >= 200 && id < 300){
          img.src = "./svg/040-jacket-3.svg";  
          p.textContent = `URBN Suggests: `;
        }
        else if(id >= 300 && id < 400){
          img.src = "./svg/016-umbrella.svg";  
          p.textContent = `URBN Suggests: `;
        }
        else if(id >= 500 && id < 600){
          img.src = "./svg/001-coat.svg";  
          p.textContent = `URBN Suggests: `;
        }
        else if(id >= 700 && id < 800){
          img.src = "./svg/018-cape.svg";  
          p.textContent = `URBN Suggests: `;
        }
        else if(id >= 800 && id < 900){
          img.src = "./svg/031-witch-hat.svg";  
          p.textContent = `URBN Suggests: Go Halloween!`;
        }

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        card.appendChild(img);
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Sad, it's not working!`;
      app.appendChild(errorMessage);
    }
  }

  request.send();
}