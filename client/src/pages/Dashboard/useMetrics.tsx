import { gql, useQuery } from "@apollo/client";

const GET_METRICS = gql`
  query {
    metrics {
      id
      label
      value
      type
      description
      category
    }
  }
`;

export default function useMetrics() {
  const { data, loading, error } = useQuery(GET_METRICS);

  return {
    data: data?.metrics || [],
    loading,
    error,
  };
}
