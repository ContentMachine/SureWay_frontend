import { routes } from ".";
import productImage2 from "../assets/Images/productImage2.svg";

import fridgeMagnet1 from "../assets/Images/fridgeMagnet1.svg";
import customMagnets from "../assets/Images/customMagnet1.svg";
import carMegnets from "../assets/Images/carMagnet1.svg";

import circle from "../assets/Images/Circle.svg";
import rectangle from "../assets/Images/Rectangle.svg";
import roundedRectange from "../assets/Images/Rounded Rectangle.svg";
import roundedSquare from "../assets/Images/Rounded Square .svg";
import square from "../assets/Images/Square.svg";

export const productsSummary = [
  {
    title: "Engraved Artworks",
    caption: "If you're looking for something unique, this is the right place",
    image: null,
  },

  {
    title: "Custom Car Magnets",
    caption: "Be creative with your own magnets",
    image: null,
  },

  {
    title: "Fridge Magnets",
    caption: "Brand Visibility",
    image: null,
  },
  {
    title: "Occassions",
    caption: "Expand your reach by bringing your sales online",
    image: null,
  },
];

export const productsCta = [
  {
    title: "Engraving",
    caption: "Add a personal touch with custom engraving for any occasion.",
    image: productImage2,
  },
  {
    title: "Custom Magnets",
    caption: "Turn your designs into fun and functional custom magnets.",
    image: productImage2,
  },
  {
    title: "Branding",
    caption: "Elevate your business identity with tailored branding solutions.",
    image: productImage2,
  },
  {
    title: "Other Services",
    caption: "Elevate your business identity with tailored branding solutions.",
    image: productImage2,
  },
];

export const magnetTypes = [
  {
    title: "Fridge Magnets",
    caption: "Add a personal touch with custom engraving for any occasion.",
    image: fridgeMagnet1,
    route: routes.FRIDGE_MAGNETS,
  },
  {
    title: "Car Magnets",
    caption: "Turn your designs into fun and functional custom magnets.",
    image: carMegnets,
    route: routes.CAR_MAGNETS,
  },
  {
    title: "Custom Magnets",
    caption: "Elevate your business identity with tailored branding solutions.",
    image: customMagnets,
    route: routes.CUSTOM_MAGNETS,
  },
];

export const magnetShapes = [
  circle,
  square,
  rectangle,
  roundedRectange,
  roundedSquare,
];

export const maggnetSizes = [
  {
    type: "fridge",
    dimensions: [""],
  },
];
