const filterAddress = (obj, address) => {
  const filteredUsers = obj.filter((user) => user.address === address);
  return filteredUsers;
};

export {filterAddress};