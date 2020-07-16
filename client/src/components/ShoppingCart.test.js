import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

const plants = [{ 
    description: "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
    difficulty: "easy",
    id: 143,
    img: "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    light: "direct",
    name: "Peperomia Rosso",
    price: 21,
    scientificName: "Peperomia caperata rosso",
    sizes: ["small"],
    watering: 2
  }, {
    description: "Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins. Flipper hails from South Africa, so he thrives in warm environments with lots of sun. This dolphin doesn't need too much water to thrive, making him low maintenance and easy to love.",
    difficulty: "easy",
    id: 125341,
    img: "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
    light: "direct",
    name: "String of Dolphins",
    price: 15,
    scientificName: "Senecio peregrinus",
    sizes: ["small"],
    watering: 2 
  }, {
    description: "One of the most popular and hardy of houseplants, he's virtually indestructible and adaptable to almost any condition. Whether you throw full, direct sunlight at him or shove him in the low-light corner of your apartment, he'll grow. And to top it off, he'll go weeks without water if he must.",
    difficulty: "easy",
    id: 4893,
    img: "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SANSEVIERIA_ZEYLANICA-1_800x.png?v=1587146468",
    light: "direct",
    name: "Snake Plant",
    price: 18,
    scientificName: "Sansevieria zeylanica",
    sizes: (2)["small", "medium"],
    watering: 2 
  }]


test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)

  getByText("Peperomia Rosso");
  getByText("$21");
  getByText("String of Dolphins");
  getByText("$15");
  getByText("Snake Plant");
  getByText("$18");
})