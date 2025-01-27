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

import customBordered from "../assets/Images/customBordered.svg";
import custom from "../assets/Images/custom.svg";
import squareRectangle from "../assets/Images/square:rectangle.svg";
import rounded from "../assets/Images/rounded.svg";

export const productsSummary = [
  {
    title: "Engravings",
    caption:
      "What would you like to engrave, art, signs, personal items and more?",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1737468753/engravings_jn5zzb.png",
  },

  {
    title: "Fridge Magnets",
    caption: "Brand Visibility",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1737468902/fridgeMagnets_lza5t6.svg",
  },

  {
    title: "Custom Magnets",
    caption:
      "For the memories that matter, every magnet tells a story, a story that sticks",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1737468902/fridgeMagnets_lza5t6.svg",
  },

  {
    title: "Sure Things",
    caption: "The coolest and most necessary of items... coming soon!",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1737724700/Sure_Things_u5evai.svg",
  },
];

export const productsCta = [
  {
    title: "Engraving",
    caption: "Add a personal touch with custom engraving for any occasion.",
    image: productImage2,
    route: "/engraving",
  },
  {
    title: "Custom Magnets",
    caption: "Turn your designs into fun and functional custom magnets.",
    image: productImage2,
    route: "/magnets",
  },
  {
    title: "Branding",
    caption: "Elevate your business identity with tailored branding solutions.",
    image: productImage2,
    route: "/branding",
  },
  {
    title: "Other Services",
    caption: "Elevate your business identity with tailored branding solutions.",
    image: productImage2,
    route: "/other-services",
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
    route: "#custom-magnets",
  },
];

export const shapes = {
  circle: "Circle",
  square: "Square",
  rectangle: "Rectangle",
  custom: "custom",
  customBordered: "custom-bordered",
  squareRectangle: "square-rectangle",
  rounded: "rounded",
};

export const magnetShapes = [
  { image: circle, shape: shapes.circle, title: "Circle" },
  { image: square, spage: shapes.square, title: "Square" },
  { image: rectangle, shape: shapes.rectangle, title: "Rectangle" },
  {
    image: roundedRectange,
    shape: shapes.rectangle,
    title: "Rounded-Rectangle",
  },
  {
    image: squareRectangle,
    shape: shapes.squareRectangle,
    title: "Square-rectangle",
  },
  { image: custom, shape: shapes.custom, title: "Custom" },
  { image: rounded, shape: shapes.rounded, title: "Rounded" },
  {
    image: customBordered,
    shape: shapes.customBordered,
    title: "Custom-bordered",
  },
];

export const magnetSizes = [
  {
    shape: shapes.rectangle,
    dimensions: ["10cm x 6cm", "14cm x 9cm", "18cm x 12cm"],
  },
  {
    shape: shapes.square,
    dimensions: ["10cm x 10cm", "12cm x 12cm", "15cm x 15cm"],
  },
  {
    shape: shapes.circle,
    dimensions: ["10cm x 10cm", "12cm x 12cm", "15cm x 15cm"],
  },
];
