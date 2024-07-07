let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);
let roles = [...userRoles.values()];
console.log(roles);
for (const role of userRoles.values()) {
  console.log(role);
}