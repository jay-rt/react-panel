import "./chartbar.scss";
import { Bar, BarChart, Tooltip } from "recharts";
import AutoSizer from "react-virtualized-auto-sizer";

type BarData = {
  name: string;
  profit?: number;
  visit?: number;
};

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: BarData[];
};

const ChartBar = (props: Props) => {
  return (
    <div className="bar">
      <h1>{props.title}</h1>
      <div className="chart">
        <AutoSizer>
          {({ width, height }) => (
            <BarChart width={width} height={height} data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                labelStyle={{ display: "none" }}
                cursor={false}
              />
              <Bar dataKey={props.dataKey} fill={props.color} />
            </BarChart>
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default ChartBar;
