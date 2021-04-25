import { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IMetric } from "../types";

interface Props {
  data: IMetric[];
}

export default function EfficiencyChart({ data }: Props) {
  const formattedData = useMemo(() => {
    return data.filter(
      (item) => item.category === "efficiency" && item.type === "percentage"
    );
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis unit="%" />
        <Tooltip />
        <Line dataKey="value" fill="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
