
const apiBaseUrl = await fetch ("http://localhost:3000/restaurant");

const restaurant = await apiBaseUrl.json();

const restaurantimg = restaurant[0].image;


const imagePath = "../images/" + restaurantimg;
console.log(imagePath);

const firstRestaurantCard = document.querySelector('.restaurant__card');


const firstRestaurantImage = firstRestaurantCard.querySelector('img');
const firstRestaurantName = firstRestaurantCard.querySelector('h3');
firstRestaurantName.textContent = restaurant[3].name
firstRestaurantImage.src = imagePath;

