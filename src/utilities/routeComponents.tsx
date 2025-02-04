import { routes } from ".";
import customMagnets1 from "../assets/Images/customMagnets1.svg";

export const routeComponents = [
  {
    title: "Homepage",
    route: routes.BASE_URL,
    properties: null,
    children: null,
    isActive: false,
    id: "homepage",
  },
  {
    title: "Our Services",
    route: routes.OUR_SERVICES,
    properties: ["isHeaderRoute"],
    children: [
      {
        title: "Fridge Magnets",
        route: routes.MAGNETS,
      },
      { title: "Car Magnets", route: routes.MAGNETS },
      { title: "Engravings", route: routes?.ENGRAVING },

      { title: "Sure Things", route: routes.SURE_THINGS },
    ],
    isActive: false,
    id: "our-services",
  },
  {
    title: "Legal",
    route: routes.OUR_SERVICES,
    properties: null,
    children: [
      {
        title: "Privacy Policy",
        route: routes.PRIVACY_POLICY,
      },
      { title: "Terms and Conditions", route: routes.TERMS_AND_CONDITIONS },
    ],
    isActive: false,
    id: "legal",
  },
  {
    title: "Contact Us",
    route: routes.CONTACT_US,
    properties: ["isHeaderRoute"],
    children: null,
    isActive: false,
    id: "contact-us",
  },
  {
    title: "Contact Us",
    route: routes.CONTACT_US,
    properties: ["rawNavigation"],
    children: [
      {
        title: "+234-090-722-22192",
        route: "tel:+2349072222192",
      },
      { title: "+234-90-722-22194", route: "tel:+2349072222194" },
      {
        title: "sureway.online@gmail.com",
        route: "mailto:sureway.online@gmail.com",
      },
    ],
    isActive: false,
    id: "contact-us",
  },
];
