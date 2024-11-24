const restaurants = [
  {
      name: "La palette du goût",
      image: "images/La_palette_du_gout.jpg",
      menu: {
          entrees: [
              { name: "Fricassée d'escargot", description: "Au piment d'Espelette", price: 35 },
              { name: "Foie gras de canard mi-cuit", description: "Et ses copeaux de truffe noire", price: 35 },
              { name: "Oeuf au plat", description: "Assaisonné à la truffe sur lit de caviar", price: 35 }
          ],
          plats: [
              { name: "Filet de boeuf aux herbes", description: "Accompagnées de sa ribembelle de legumes", price: 35 },
              { name: "Parmentier de queue de boeuf", description: "À la truffe noire sur sa purée de panais", price: 35 },
              { name: "Filet de turbot", description: "Aux agrumes", price: 35 }
          ],
          desserts: [
              { name: "Paris-Brest", description: "Revisité", price: 35 },
              { name: "Macaron au chocolat d'exception", description: "Et glace à la vanille de Madagascar", price: 35 },
              { name: "Mousse au chocolat", description: "Au piment d'Espelette et à la truffe noire", price: 35 }
          ]
      }
  },
  {
      name: "Le délice des sens",
      image: "images/Le_delice_des_sens.jpg",
      menu: {
          entrees: [
              { name: "Tartare de thon", description: "Assaisonné au yuzu", price: 35 },
              { name: "Bouchée de homard croustillant", description: "Et sa farandole de petits légumes", price: 35 },
              { name: "Velouté de cèpes", description: "Aux truffes", price: 35 }
          ],
          plats: [
              { name: "Poulet rôti aux herbes de Provence", description: "Et sa crème de truffe", price: 35 },
              { name: "Langouste rôtie", description: "Et ses legumes de saison", price: 35 },
              { name: "Côte de boeuf Angus", description: "Et sa purée de panais", price: 35 }
          ],
          desserts: [
              { name: "Farandole de desserts", description: "Du chef", price: 35 },
              { name: "Crème brulée", description: "Revisité", price: 35 },
              { name: "Tiramisu", description: "À la noisette", price: 35 }
          ]
      }
  },
  {
      name: "L'étoile des gourmets",
      image: "images/L_etoile_des_gourmets.jpg",
      menu: {
          entrees: [
              { name: "Salade de homard", description: "Avec sa vinaigrette aux agrumes", price: 40 },
              { name: "Carpaccio de Saint-Jacques", description: "Sur lit de mesclun", price: 38 }
          ],
          plats: [
              { name: "Risotto aux champignons", description: "Et copeaux de parmesan", price: 30 },
              { name: "Canard laqué", description: "Accompagné de légumes glacés", price: 45 }
          ],
          desserts: [
              { name: "Fondant au chocolat", description: "Avec son cœur coulant", price: 25 },
              { name: "Cheesecake au citron", description: "Et son coulis de fruits rouges", price: 28 }
          ]
      }
  },
  {
      name: "Saveurs d'antan",
      image: "images/Saveurs_d_antan.jpg",
      menu: {
          entrees: [
              { name: "Terrine de gibier", description: "Avec sa gelée au porto", price: 30 },
              { name: "Soupe à l'oignon", description: "Gratinée au fromage", price: 20 }
          ],
          plats: [
              { name: "Cassoulet traditionnel", description: "Aux haricots tarbais", price: 35 },
              { name: "Poulet fermier rôti", description: "Avec pommes sautées", price: 33 }
          ],
          desserts: [
              { name: "Tarte aux pommes", description: "Avec une boule de glace vanille", price: 18 },
              { name: "Crêpe suzette", description: "Flambée au Grand Marnier", price: 22 }
          ]
      }
  }
];

  export { restaurants };