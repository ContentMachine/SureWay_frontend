import { routes } from ".";

export const routeComponents = [
  {
    title: "Homepage",
    route: routes.BASE_URL,
    properties: null,
    children: null,
    isActive: false,
  },
  {
    title: "Our Services",
    route: routes.OUR_SERVICES,
    properties: ["isHeaderRoute"],
    children: [
      { title: "Branding", route: routes?.BRANDING },
      { title: "Engraving", route: routes.ENGRAVING },
      { title: "Custom Magnets", route: routes.CUSTOM_MAGNETS },
      { title: "Order Processing", route: routes.ORDER_PROCESSING },
    ],
    isActive: false,
  },

  {
    title: "Sure Things",
    route: routes.SURE_THINGS,
    properties: ["isHeaderRoute"],
    children: [
      { title: "Cool Stuff", route: routes?.COOL_STUFF },
      { title: "Baby Stuff", route: routes.BABY_STUFF },
      { title: "Gadgets & tech", route: routes.GADGETS_AND_TECH },
      { title: "Home Stuff", route: routes.HOME_STUFF },
    ],
    isActive: false,
  },
  {
    title: "Contact Us",
    route: routes.CONTACT_US,
    properties: ["isHeaderRoute"],
    children: null,
    isActive: false,
  },
];