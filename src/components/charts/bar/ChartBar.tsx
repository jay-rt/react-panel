import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./chartbar.scss";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const ChartBar = (props: Props) => {
  return (
    <div className="bar">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={false}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartBar;
