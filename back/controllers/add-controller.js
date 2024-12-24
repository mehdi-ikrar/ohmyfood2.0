const newController = {
  renderAdd(req, res) {
    res.render("pages/addRestaurants");
  },
  handleAdd(req, res) {
    const { name, image, entree_name,entree_desc, entree_price, plat_name, plat_desc, plat_price, dessert_name, dessert_desc , dessert_price  } = req.body;

  
    const restaurantData = {
      name,
      image,
      menu: {
        entree: {
          name: entree_name,
          description: entree_desc,
          price: entree_price
        },
        plat: {
          name: plat_name,
          description: plat_desc,
          price: plat_price
        },
        dessert: {
          name: dessert_name,
          description: dessert_desc,
          price: dessert_price
        }
      }
    };
    // Rediriger après le traitement
    
    
  }
};

export default newController;


