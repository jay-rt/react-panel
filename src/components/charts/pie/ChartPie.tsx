import "./chartpie.scss";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import AutoSizer from "react-virtualized-auto-sizer";

type PieData = {
  name: string;
  value: number;
  color: string;
};

type Props = {
  title: string;
  chartData: PieData[];
};

const ChartPie = (props: Props) => {
  return (
    <div className="pie">
      <h1>{props.title}</h1>
      <div className="chart">
        <AutoSizer>
          {({ width, height }) => (
            <PieChart width={width} height={height}>
              <Tooltip
                contentStyle={{ background: "#fff", borderRadius: "5px" }}
              />
              <Pie
                data={props.chartData}
                innerRadius="70%"
                outerRadius="90%"
                paddingAngle={5}
                dataKey="value"
              >
                {props.chartData.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          )}
        </AutoSizer>
      </div>
      <div className="options">
        {props.chartData.map((item) => (
          <div className="option" key={item.name}>
            <div className="dot" style={{ background: item.color }}></div>
            <span className="name">{item.name}</span>
            <span className="value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartPie;
