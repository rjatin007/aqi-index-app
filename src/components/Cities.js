import styled from "styled-components";
import FlexColumnContainer from "../ui/FlexColumnContainer";
import { getFormattedData } from "../utils/aqiMapper";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { aqiColors, appColors } from "../utils/Colors";
import Legend from "./Legend";
const ChartContainer = styled(FlexColumnContainer)`
  margin: 100px auto;
`;
const Cities = ({ cities }) => {
  const data = getFormattedData(cities);
  console.log("data", data);
  return (
    <ChartContainer>
      <BarChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="aqi" fill={appColors.darkTeal}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={aqiColors[entry.quality]} />
          ))}
        </Bar>
      </BarChart>
      <Legend />
    </ChartContainer>
  );
};

export default Cities;
