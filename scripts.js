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
          img.src = "./icons/040-jacket-3.svg";  
          p.textContent = `URBN Suggests: Herschel Supply Co. Forecast Rain Coat`;
          card.setAttribute("onclick", "location.href='https://www.urbanoutfitters.com/shop/herschel-supply-co-forecast-rain-coat?category=jackets-coats-for-women&color=029'");
        }
        else if(id >= 300 && id < 400){
          img.src = "./icons/016-umbrella.svg";  
          p.textContent = `URBN Suggests: Bubble Umbrella`;
          card.setAttribute("onclick", "location.href='https://www.urbanoutfitters.com/shop/bubble-umbrella'");
        }
        else if(id >= 500 && id < 600){
          img.src = "./icons/001-coat.svg";  
          p.textContent = `URBN Suggests: Carmella Cozy Reversible Coat`;
          card.setAttribute("onclick", "location.href='https://www.urbanoutfitters.com/shop/uo-carmella-cozy-reversible-coat2?adpos=1o1&cm_mmc=SEM-_-Google-_-PLA-_-414308617111_condition_new_product_type_womens_product_type_apparel_product_t&color=061&creative=251335296627&device=c&gclid=Cj0KCQjw6MHdBRCtARIsAEigMxH653gAHg7qB8l-k2qnduvz6QiXicUjpV1hpqELNCARl7OD4QqOPygaAg8HEALw_wcB&inventoryCountry=US&matchtype=&mrkgadid=3275540864&mrkgcl=671&network=g&product_id=47408018&utm_campaign=BRAND_SHOPPING'");
        }
        else if(id >= 700 && id < 800){
          img.src = "./icons/050-bow.svg";  
          p.textContent = `URBN Suggests: Darling Draped Bow Scrunchie`;
          card.setAttribute("onclick", "location.href='https://www.urbanoutfitters.com/shop/darling-draped-bow-scrunchie'");
        }
        else if(id >= 800 && id < 900){
          img.src = "./icons/031-witch-hat.svg";  
          p.textContent = `URBN Suggests: Go Halloween!`;
          card.setAttribute("onclick", "location.href='https://www.urbanoutfitters.com/shop/skeleton-catsuit-halloween-costume'");
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