import { routes } from ".";
import productImage2 from "../assets/Images/productImage2.svg";

import fridgeMagnet1 from "../assets/Images/fridgeMagnet1.svg";
import customMagnets from "../assets/Images/customMagnet1.svg";
import carMegnets from "../assets/Images/carMagnet1.svg";

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
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1738239673/Fridge_Magnets_mtm4tz.svg",
  },

  {
    title: "Sure Things (Coming soon)",
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
  roundedRectangle: "rounded-rectangle",
  roundedSquare: "rounded-square",
};

export const magnetShapes = [
  {
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1738068531/Circle_aplofq.svg",
    shape: shapes.circle,
    title: "Circle",
  },
  {
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1738068531/Square_rtzt9q.svg",
    spage: shapes.square,
    title: "Square",
  },
  {
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1738068531/Rectangle_oogjn8.svg",
    shape: shapes.rectangle,
    title: "Rectangle",
  },
  {
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1738068531/Rectangle_Rounded_v4uhjl.svg",
    shape: shapes.rectangle,
    title: "Rounded-Rectangle",
  },
  {
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1738068536/Square_Rounded_p6w2jy.svg",
    shape: shapes.roundedSquare,
    title: "Rounded-Square",
  },
  {
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1738068793/square_rectangle_cvvdlb.svg",
    shape: shapes.squareRectangle,
    title: "Square-or-rectangle",
  },
  {
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1738068792/custom_f5orns.svg",
    shape: shapes.custom,
    title: "Custom",
  },
  {
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1738068793/rounded_b3xqey.svg",
    shape: shapes.rounded,
    title: "Rounded",
  },
  {
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1738068793/customBordered_nqgxmz.svg",
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
