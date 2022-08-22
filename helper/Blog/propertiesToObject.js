export const propertiesToObject = (properties) => {
  const newProperties = {};

  for (var i = 0; i < properties.length; i++) {
    const key = Object.keys(properties[i]);
    newProperties[key] = properties[i][key];
  }

  return newProperties;
};
