import metric from "./metric";

const root = {
  Query: {
    hello: () => "Hello world!",
  },
};

export default [root, metric];
