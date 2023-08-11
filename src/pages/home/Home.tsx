import "./home.scss";
import TopDeals from "../../components/topdeals/TopDeals";
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "./lineChartData";
import ChartLine from "../../components/charts/line/ChartLine";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopDeals />
      </div>
      <div className="box box2">
        <ChartLine {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartLine {...chartBoxRevenue} />
      </div>
      <div className="box box4">Box4</div>
      <div className="box box5">
        <ChartLine {...chartBoxProduct} />
      </div>
      <div className="box box6">
        <ChartLine {...chartBoxConversion} />
      </div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
      <div className="box box9">Box9</div>
    </div>
  );
};

export default Home;
