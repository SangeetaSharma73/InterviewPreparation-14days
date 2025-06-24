"use strict";

var _user$address, _user$profile$email, _user$profile;
var user = {
  name: "Jane",
  address: {
    city: "New York"
  }
};
console.log(user === null || user === void 0 ? void 0 : (_user$address = user.address) === null || _user$address === void 0 ? void 0 : _user$address.city); // Optional chaining
console.log((_user$profile$email = (_user$profile = user.profile) === null || _user$profile === void 0 ? void 0 : _user$profile.email) !== null && _user$profile$email !== void 0 ? _user$profile$email : "No email available"); // Nullish coalescing