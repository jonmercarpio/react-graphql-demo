import { useMemo } from "react";
import {
  Area,
  AreaChart,
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

export default function ShiftChart({ data }: Props) {
  const formattedData = useMemo(() => {
    return data.filter((item) => item.category === "shift");
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
