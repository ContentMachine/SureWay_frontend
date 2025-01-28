export const capitalize = (data: string) => {
  if (data) return `${data?.charAt(0)?.toUpperCase()}${data?.slice(1)}`;
};

export const capitalizeEachWord = (text: string) => {
  const destructuredStringArray = text.split(" ");
  let capitalizedString = [];

  for (let i = 0; i < destructuredStringArray.length; i++) {
    capitalizedString.push(capitalize(destructuredStringArray[i]));
  }

  return capitalizedString.join(" ");
};
