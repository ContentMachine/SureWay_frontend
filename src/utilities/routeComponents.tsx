import { routes } from ".";

export const routeComponents = [
  {
    title: "Homepage",
    route: routes.BASE_URL,
    properties: null,
  },
  {
    title: "Our Services",
    route: routes.OUR_SERVICES,
    properties: ["isHeaderRoute"],
  },

  {
    title: "Sure Things",
    route: routes.SURE_THINGS,
    properties: ["isHeaderRoute"],
  },
  {
    title: "Contact Us",
    route: routes.CONTACT_US,
    properties: ["isHeaderRoute"],
  },
];
