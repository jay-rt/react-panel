import "./chartline.scss";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type DataType = {
  name: string;
  users?: number;
  products?: number;
  revenue?: number;
  ratio?: number;
};

type Props = {
  title: string;
  icon: string;
  number: number | string;
  color: string;
  dataKey: string;
  percentage: number;
  chartData: DataType[];
};

const ChartLine = (props: Props) => {
  return (
    <div className="line">
      <div className="left">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <p>{props.number}</p>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="right">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="desc">
          <span
            className={
              props.percentage > 0
                ? "percentage positive"
                : "percentage negative"
            }
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartLine;
