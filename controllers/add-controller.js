handleAddRestaurant(req, res) {
    const {
      name, image, menu,
      entree_name, entree_desc, entree_price,
      plat_name, plat_desc, plat_price,
      dessert_name, dessert_desc, dessert_price
    } = req.body;

    console.log('Données reçues du formulaire:', {
      name, image, menu, entree_name, entree_desc, entree_price,
      plat_name, plat_desc, plat_price,
      dessert_name, dessert_desc, dessert_price
    });

    if (!name || !image || !menu) {
      return res.status(400).send('Le nom, l\'image et le menu sont obligatoires!');
    }

    datamapper.addRestaurant({
      name,
      image,
      menu,
      entree: { name: entree_name, description: entree_desc, price: entree_price },
      plat: { name: plat_name, description: plat_desc, price: plat_price },
      dessert: { name: dessert_name, description: dessert_desc, price: dessert_price }
    })
    .then(() => {
      res.redirect('/'); // Redirection vers la page d'accueil après ajout
    })
    .catch((error) => {
      console.error('Erreur lors de l\'ajout du restaurant:', error);
      res.status(500).send('Erreur lors de l\'ajout du restaurant');
    });
  },

  // Rendre la page pour ajouter un restaurant
  renderAddRestaurants(req, res) {
    console.log("Affichage de la page pour ajouter un restaurant");
    res.render("pages/addRestaurants");
  },