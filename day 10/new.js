let User = function (lastName, nativeLanguage) {
  this.lastName = lastName;
  this.nativeLanguage = nativeLanguage;
};

const akhilReddy = new User("AkhilReddy", "telugu");
console.log(akhilReddy); // undefined

const akhil = new User("Akhil", "English");
console.log(akhil); // User { lastName: 'Akhil', nativeLanguage: 'English' }
console.log(akhil instanceof User); // true
