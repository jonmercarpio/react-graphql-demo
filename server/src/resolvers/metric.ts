import { generateData } from "../mocks/mockData";

export default {
  Query: {
    metrics: (_: any, args: { caterory: string }) => {
      const data = generateData(100);

      if (args.caterory) {
        return data.filter(
          (item) => item.category === args.caterory.toLowerCase()
        );
      }

      return data;
    },
  },
};
