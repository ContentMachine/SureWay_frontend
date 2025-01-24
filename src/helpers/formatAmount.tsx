export const formatCurrency = (value: string | number) => {
  if (typeof value === "string") {
    value = value.replace(/,/g, "");
  }
  const numericValue = parseFloat(value as string);

  if (isNaN(numericValue)) {
    return "";
  }

  return numericValue.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
