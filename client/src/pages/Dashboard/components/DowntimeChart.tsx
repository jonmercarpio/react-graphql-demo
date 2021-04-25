import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IMetric } from "../types";

interface Props {
  data: IMetric[];
}

export default function DowntimeChart({ data }: Props) {
  const formattedData = useMemo(() => {
    return data.filter((item, index, self) => item.category === "downtime");
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
