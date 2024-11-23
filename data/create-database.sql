-- Création de la table restaurants
CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL
);

-- Création de la table menus
CREATE TABLE menus (
    id SERIAL PRIMARY KEY,
    restaurant_id INTEGER NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

-- Création des tables pour chaque catégorie de plats
CREATE TABLE entrees (
    id SERIAL PRIMARY KEY,
    menu_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL NOT NULL,
    FOREIGN KEY (menu_id) REFERENCES menus(id)
);

CREATE TABLE plats (
    id SERIAL PRIMARY KEY,
    menu_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL NOT NULL,
    FOREIGN KEY (menu_id) REFERENCES menus(id)
);

CREATE TABLE desserts (
    id SERIAL PRIMARY KEY,
    menu_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL NOT NULL,
    FOREIGN KEY (menu_id) REFERENCES menus(id)
);

-- Insertion des données dans la table restaurants
INSERT INTO restaurants (name, image) VALUES
('La palette du goût', 'images/La_palette_du_gout.jpg'),
('Le délice des sens', 'images/Le_delice_des_sens.jpg'),
('L''étoile des gourmets', 'images/L_etoile_des_gourmets.jpg'),
('Saveurs d''antan', 'images/Saveurs_d_antan.jpg');

-- Insertion des données dans la table menus
-- En supposant que les restaurants ont déjà été insérés et ont des id correspondants (1, 2, 3, 4)
INSERT INTO menus (restaurant_id) VALUES
(1),  -- La palette du goût
(2),  -- Le délice des sens
(3),  -- L'étoile des gourmets
(4);  -- Saveurs d'antan

-- Insertion des entrées
INSERT INTO entrees (menu_id, name, description, price) VALUES
(1, 'Fricassée d''escargot', 'Au piment d''Espelette', 35),
(1, 'Foie gras de canard mi-cuit', 'Et ses copeaux de truffe noire', 35),
(1, 'Oeuf au plat', 'Assaisonné à la truffe sur lit de caviar', 35),
(2, 'Tartare de thon', 'Assaisonné au yuzu', 35),
(2, 'Bouchée de homard croustillant', 'Et sa farandole de petits légumes', 35),
(2, 'Velouté de cèpes', 'Aux truffes', 35),
(3, 'Salade de homard', 'Avec sa vinaigrette aux agrumes', 40),
(3, 'Carpaccio de Saint-Jacques', 'Sur lit de mesclun', 38),
(4, 'Terrine de gibier', 'Avec sa gelée au porto', 30),
(4, 'Soupe à l''oignon', 'Gratinée au fromage', 20);

-- Insertion des plats
INSERT INTO plats (menu_id, name, description, price) VALUES
(1, 'Filet de boeuf aux herbes', 'Accompagnées de sa ribembelle de legumes', 35),
(1, 'Parmentier de queue de boeuf', 'À la truffe noire sur sa purée de panais', 35),
(1, 'Filet de turbot', 'Aux agrumes', 35),
(2, 'Poulet rôti aux herbes de Provence', 'Et sa crème de truffe', 35),
(2, 'Langouste rôtie', 'Et ses legumes de saison', 35),
(2, 'Côte de boeuf Angus', 'Et sa purée de panais', 35),
(3, 'Risotto aux champignons', 'Et copeaux de parmesan', 30),
(3, 'Canard laqué', 'Accompagné de légumes glacés', 45),
(4, 'Cassoulet traditionnel', 'Aux haricots tarbais', 35),
(4, 'Poulet fermier rôti', 'Avec pommes sautées', 33);

-- Insertion des desserts
INSERT INTO desserts (menu_id, name, description, price) VALUES
(1, 'Paris-Brest', 'Revisité', 35),
(1, 'Macaron au chocolat d''exception', 'Et glace à la vanille de Madagascar', 35),
(1, 'Mousse au chocolat', 'Au piment d''Espelette et à la truffe noire', 35),
(2, 'Farandole de desserts', 'Du chef', 35),
(2, 'Crème brulée', 'Revisité', 35),
(2, 'Tiramisu', 'À la noisette', 35),
(3, 'Fondant au chocolat', 'Avec son cœur coulant', 25),
(3, 'Cheesecake au citron', 'Et son coulis de fruits rouges', 28),
(4, 'Tarte aux pommes', 'Avec une boule de glace vanille', 18),
(4, 'Crêpe suzette', 'Flambée au Grand Marnier', 22);
