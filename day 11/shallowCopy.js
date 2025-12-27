const user = {
  name: "Alice",
  address: {
    city: "sydney",
    zip: 2000,
  },
};

const shallowCopy = { ...user };
shallowCopy.address.city = "Adelaide";

console.log(user.address.city); // the city  changed in the original
console.log(shallowCopy.address.city); // the city changed in the copy
