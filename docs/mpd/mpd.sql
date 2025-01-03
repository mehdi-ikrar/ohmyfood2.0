BEGIN;

DROP TABLE IF EXISTS "restaurant", "starter", "main", "dessert", "client", "profil";

CREATE TABLE "restaurant" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "city" VARCHAR(50) NOT NULL UNIQUE,
    "image" VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE "starter" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "description" TEXT NOT NULL,
    "price" DECIMAL(5, 2) NOT NULL,
    "restaurant_id" INTEGER NOT NULL REFERENCES "restaurant"("id") ON DELETE CASCADE
);

CREATE TABLE "main" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "description" VARCHAR(100) NOT NULL UNIQUE,
    "price" DECIMAL(5, 2) NOT NULL,
    "restaurant_id" INTEGER NOT NULL REFERENCES "restaurant"("id") ON DELETE CASCADE
);

CREATE TABLE "dessert" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "description" VARCHAR(100) NOT NULL UNIQUE,
    "price" DECIMAL(5, 2) NOT NULL,
    "restaurant_id" INTEGER NOT NULL REFERENCES "restaurant"("id") ON DELETE CASCADE
);

CREATE TABLE "client" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL UNIQUE,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "password" VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE "profil" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "order" VARCHAR(10) NOT NULL UNIQUE,
    "like" BOOLEAN DEFAULT, 
    "dislike" BOOLEAN DEFAULT, 
    "client_id" INTEGER NOT NULL REFERENCES "client"("id") ON DELETE CASCADE
);

COMMIT;
