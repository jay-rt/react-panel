import "./chartarea.scss";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import AutoSizer from "react-virtualized-auto-sizer";

type AreaData = {
  name: string;
  books: number;
  clothes: number;
  electronic: number;
};

type Props = {
  title: string;
  chartData: AreaData[];
};

const ChartArea = (props: Props) => {
  return (
    <div className="area">
      <h1>{props.title}</h1>
      <div className="chart">
        <AutoSizer>
          {({ width, height }) => (
            <AreaChart
              width={width}
              height={height}
              data={props.chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="electronic"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="clothes"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="books"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default ChartArea;
