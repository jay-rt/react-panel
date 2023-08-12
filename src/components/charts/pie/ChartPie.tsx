import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./chartpie.scss";

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
      <div className="pie__chart">
        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
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
          </ResponsiveContainer>
        </div>
        <div className="options">
          {props.chartData.map((item) => (
            <div className="option" key={item.name}>
              <div className="title">
                <div className="dot" style={{ background: item.color }} />
                <span>{item.name}</span>
              </div>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartPie;
