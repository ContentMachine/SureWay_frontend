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
  image: File | null;
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
};
