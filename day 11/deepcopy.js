const user = {
  name: "Alice",
  address: {
    city: "sydney",
    zip: 2000,
  },
};

const deepcopy = structuredClone(user);
deepcopy.address.city = "Adelaide";

console.log(user.address.city); // the city did not change
console.log(deepcopy.address.city); // the city changed in the copy
