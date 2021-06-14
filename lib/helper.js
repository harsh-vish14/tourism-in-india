export const slugToNormalConverter = (string) => {
  return string.trim().split("-").join(" ").toLowerCase();
};

export const slugConverter = (string) => {
  return string.trim().split(" ").join("-").toLowerCase();
};
