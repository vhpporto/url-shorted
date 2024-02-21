export const validateUrlExpiration = (expirationDate) => {
  if (new Date(expirationDate).getTime() > new Date().getTime()) {
    return true;
  }

  return false;
};
