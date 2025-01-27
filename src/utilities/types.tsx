export type navItemTypes = {
  title: string;
  route?: string;
  isActive?: boolean;
  description?: string;
  id: string;
};

export type modalGenericType = {
  [key: string]: boolean;
};

export type magnetDataType = {
  shape: string;
  dimension: string;
  fullName: string;
  email: string;
  phone: string;
  customText: string;
  achievement: string;
  image: File | string | null;
  _id?: string;
};

export type productType = {
  name: string;
  image: File | string | null;
  hoverImage: File | string | null;
  _id: string;
  slug: string;
};

export type magnetTypeTypes = {
  _id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  shapes: string[];
  sizes: string[];
  slug: string;
  bannerImage: string;
};

export type shapesType = {
  image: string;
  shape: string;
  title: string;
  isActive?: boolean;
};

export type requestType = {
  isLoading: boolean;
  data: any;
  error: any;
  id?: string;
};

export type priceStructure = {
  estimatedTax: number;
  price: number;
  shipping: number;
  size: string;
  subTotal: number;
  total: number;
};

export type legalNoticesType = {
  title: string;
  list?: string[];
  paragraph: { text?: string; list?: string[] | null }[];
};
