const resolvers = {
  Query: {
    addNumbers: (_, {a, b} ) => {
      console.log(a + " + " + b)
      return a + b;
    },
    testString: () => {
      return "new string!";
    },
  },
};

export default resolvers;
