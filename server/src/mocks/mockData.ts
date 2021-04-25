import { datatype, internet, commerce, system, lorem, helpers } from "faker";
import { range, uniqBy, uniqWith } from "lodash";

interface IMetric {
  id: String;
  label: String;
  value: Number;
  type: String;
  description: String;
  category: String;
}

export const generateData = (count: number): IMetric[] => {
  const data = range(count).map<IMetric>((index) => {
    const type = helpers.randomize(["percentage", "number", "secs", "hours"]);
    const category = helpers.randomize(["downtime", "shift", "efficiency"]);
    const isPercentage = type === "percentage";

    let value = datatype.number({
      min: -100,
      max: isPercentage ? 100 : 2500,
    });

    let description = null;
    switch (category) {
      case "downtime": {
        description = helpers.randomize([
          `The downtime caused by ${lorem.word()}`,
          `Out of service caused by ${lorem.word()}`,
        ]);
        value = Math.abs(value);
        break;
      }
      case "shift": {
        description = helpers.randomize([
          "Last shift duration",
          "Time spent (in seconds) cleaning the machines during the last shift",
        ]);
        value = Math.abs(value);
        break;
      }
      case "efficiency": {
        description = helpers.randomize([
          "The line speed loss",
          "The overall equipment efficiency",
          "Produced goods before reaching the pelletizer",
        ]);
        break;
      }
      default: {
        description = lorem.words();
      }
    }

    return {
      id: datatype.uuid(),
      label: commerce.department(),
      value,
      type,
      description,
      category,
    };
  });

  return uniqWith(
    data,
    (a: IMetric, b: IMetric) => a.label === b.label && a.category === b.category
  );
};
