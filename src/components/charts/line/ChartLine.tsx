import "./chartline.scss";
import { Link } from "react-router-dom";
import { Line, LineChart, Tooltip } from "recharts";
import AutoSizer from "react-virtualized-auto-sizer";

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
      <div className="info__general">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <p>{props.number}</p>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="info__chart">
        <div className="chart">
          <AutoSizer>
            {({ width, height }) => (
              <LineChart width={width} height={height} data={props.chartData}>
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
            )}
          </AutoSizer>
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
