import { gql } from "apollo-server-express";

export default gql`
  type Metric {
    id: String
    label: String
    value: Float
    type: String
    description: String
    category: String
  }

  enum MetricCategory {
    DOWNTIME
    SHIFT
    EFFICIENCY
  }

  extend type Query {
    metrics(caterory: MetricCategory): [Metric]
  }
`;
