import MaterialTable from "material-table";
import React, { useMemo } from "react";
import { useIntl } from "react-intl";
import { formatValue } from "../../../utils";
import { IMetric } from "../types";

export interface Props {
  data: IMetric[];
}

export default function MetricsTable({ data }: Props) {
  const intl = useIntl();

  const formattedData = useMemo(() => {
    return data.map((item) => ({
      id: item.id,
      label: item.label,
      value: formatValue(item.value, item.type, intl),
      description: item.description,
      category: item.category,
    }));
  }, [data, intl]);

  return (
    <MaterialTable
      title="Metrics"
      columns={[
        {
          title: "Label",
          field: "label",
        },
        {
          title: "Value",
          field: "value",
        },

        {
          title: "Description",
          field: "description",
        },
        {
          title: "Catergory",
          field: "category",
        },
      ]}
      data={formattedData}
    />
  );
}
