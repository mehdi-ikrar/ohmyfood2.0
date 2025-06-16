import "dotenv/config";
import { sequelize } from "../models/sequelize_client.js";
import { Restaurant, Starter, Main, Dessert } from "../models/associations.js";
import { restaurants } from "../data/restaurant.js";
import { starter } from "../data/starter.js";
import { main } from "../data/main.js";
import { dessert } from "../data/dessert.js";

// Seed Restaurant table
for (const rest of restaurants) {
  await Restaurant.create({
    id: rest.id,
    name: rest.name,
    image: rest.image,
    description: rest.description,
    address: rest.address,
    city: rest.city,
    style: rest.style
  });
}
console.log('Restaurants seeded');

// Seed Starter table
for (const s of starter) {
  await Starter.create({
    title: s.title,
    image: s.image,
    description: s.description,
    price: s.price,
    restaurant_id: s.restaurant_id || s.restaurantId || 1 // à adapter selon ta donnée
  });
}
console.log('Starters seeded');

// Seed Main table
for (const m of main) {
  await Main.create({
    title: m.title,
    image: m.image,
    description: m.description,
    price: m.price,
    restaurant_id: m.restaurant_id || m.restaurantId || 1 // à adapter selon ta donnée
  });
}
console.log('Mains seeded');

// Seed Dessert table
for (const d of dessert) {
  await Dessert.create({
    title: d.title,
    image: d.image,
    description: d.description,
    price: d.price,
    restaurant_id: d.restaurant_id || d.restaurantId || 1 // à adapter selon ta donnée
  });
}
console.log('Desserts seeded');

await sequelize.close();