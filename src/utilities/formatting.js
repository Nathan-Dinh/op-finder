const Capitalize = (str) => {
  let fullName = "";
  const STR_ARRAY = str.split(" ");
  STR_ARRAY.forEach((str) => {
    fullName +=
      str.charAt(0).toUpperCase() + str.substring(1, str.length) + " ";
  });
  return fullName;
};

export { Capitalize };
