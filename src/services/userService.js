// Mock Up Service for User
// TODO: Change to real service when ready
const users = [];

exports.getAllUsers = async () => {
  return users;
};

exports.getUserById = async id => {
  return users.find(user => user.id === id);
};

exports.createUser = async userData => {
  const newUser = { id: Date.now().toString(), ...userData };
  users.push(newUser);
  return newUser;
};

exports.updateUser = async (id, userData) => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...userData };
  return users[index];
};

exports.deleteUser = async id => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
};
