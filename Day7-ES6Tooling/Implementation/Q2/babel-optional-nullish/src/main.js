const user = {
  name: "Jane",
  address: {
    city: "New York",
  },
};

console.log(user?.address?.city); // Optional chaining
console.log(user.profile?.email ?? "No email available"); // Nullish coalescing
