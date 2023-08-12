import "./home.scss";
import TopDeals from "../../components/topdeals/TopDeals";
import {
  lineChartConversion,
  lineChartProduct,
  lineChartRevenue,
  lineChartUser,
} from "./lineChartData";
import ChartLine from "../../components/charts/line/ChartLine";
import { barChartRevenue, barChartVisit } from "./barChartData";
import ChartBar from "../../components/charts/bar/ChartBar";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopDeals />
      </div>
      <div className="box box2">
        <ChartLine {...lineChartUser} />
      </div>
      <div className="box box3">
        <ChartLine {...lineChartRevenue} />
      </div>
      <div className="box box4">Box4</div>
      <div className="box box5">
        <ChartLine {...lineChartProduct} />
      </div>
      <div className="box box6">
        <ChartLine {...lineChartConversion} />
      </div>
      <div className="box box7">Box7</div>
      <div className="box box8">
        <ChartBar {...barChartRevenue} />
      </div>
      <div className="box box9">
        <ChartBar {...barChartVisit} />
      </div>
    </div>
  );
};

export default Home;
