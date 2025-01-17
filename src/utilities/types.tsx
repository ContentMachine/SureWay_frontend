export type navItemTypes = {
  title: string;
  route?: string;
  isActive?: boolean;
  description?: string;
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
  title: string;
  price: number | string;
  image: File | string | null;
  hoverImage: File | string | null;
};
