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

// Valentines
import valentines1 from "../assets/Images/Valentines 1.svg";
import valentines1Hover from "../assets/Images/Valentines 1_hover.svg";
import valentines2 from "../assets/Images/Valentines 2.svg";
import valentines2Hover from "../assets/Images/Valentines 2_hover.svg";
import valentines3 from "../assets/Images/Valentines 3.svg";
import valentines3Hover from "../assets/Images/Valentines 3_hover.svg";
import valentines4 from "../assets/Images/Valentines 4.svg";
import valentines4Hover from "../assets/Images/Valentines 4_hover.svg";
import valentines5 from "../assets/Images/Valentines 5.svg";
import valentines5Hover from "../assets/Images/Valentines 5_hover.svg";
import valentines6 from "../assets/Images/Valentines 6.svg";
import valentines6Hover from "../assets/Images/Valentines 6_hover.svg";
import valentines7 from "../assets/Images/Valentines 7.svg";
import valentines7Hover from "../assets/Images/Valentines 7_hover.svg";
import valentines8 from "../assets/Images/Valentines 8.svg";
import valentines8Hover from "../assets/Images/Valentines 8_hover.svg";
import valentines9 from "../assets/Images/Valentines 9.svg";
import valentines9Hover from "../assets/Images/Valentines 9_hover.svg";

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
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1737468918/sureThings_q5idzg.svg",
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
};

export const magnetShapes = [
  { image: circle, shape: shapes.circle, title: "Circle" },
  { image: square, spage: shapes.square, title: "Square" },
  { image: rectangle, shape: shapes.rectangle, title: "Rectangle" },
  {
    image: roundedRectange,
    shape: shapes.rectangle,
    title: "Rounded Rectangle",
  },
  { image: roundedSquare, shape: shapes.rectangle, title: "Rounded Square" },
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

export const valentinesProducts = [
  {
    title: "Valentines Card 1",
    price: 7000,
    image: valentines1,
    hoverImage: valentines2Hover,
  },
  {
    title: "Valentines Card 2",
    price: 7000,
    image: valentines2,
    hoverImage: valentines3Hover,
  },
  {
    title: "Valentines Card 3",
    price: 7000,
    image: valentines3,
    hoverImage: valentines4Hover,
  },
  {
    title: "Valentines Card 4",
    price: 7000,
    image: valentines4,
    hoverImage: valentines5Hover,
  },
  {
    title: "Valentines Card 5",
    price: 7000,
    image: valentines5,
    hoverImage: valentines6Hover,
  },
  {
    title: "Valentines Card 6",
    price: 7000,
    image: valentines6,
    hoverImage: valentines7Hover,
  },
  {
    title: "Valentines Card 7",
    price: 7000,
    image: valentines7,
    hoverImage: valentines8Hover,
  },
  {
    title: "Valentines Card 8",
    price: 7000,
    image: valentines8,
    hoverImage: valentines9Hover,
  },
  {
    title: "Valentines Card 9",
    price: 7000,
    image: valentines9,
    hoverImage: valentines1Hover,
  },
];
