const isAuthenticated = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isAuthenticated) {
    return true;
  }

  return false;
};

export default isAuthenticated;
