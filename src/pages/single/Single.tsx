import "./single.scss";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export type Props<T, K> = {
  id: number;
  slug: string;
  img?: string;
  title: string;
  info: T;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: K[];
  };
  activities: { time: string; text: string }[];
};

const Single = <T extends object, K extends object>(props: Props<T, K>) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="top__info">
            <img src={props.img ? props.img : "/noavatar.png"} alt="" />
            <h1>{props.title}</h1>
            <button type="button">Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="item__title">{item[0]}:</span>
                <span className="item__value">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {props.chart.dataKeys.map((dataKey) => (
                <Line
                  type="monotone"
                  dataKey={dataKey.name}
                  stroke={dataKey.color}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        <ul>
          {props.activities.map((activity) => (
            <li>
              <div>
                <p>{activity.text}</p>
                <time>{activity.time}</time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Single;
