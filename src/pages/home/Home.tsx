import "./home.scss";
import TopDeals from "../../components/topdeals/TopDeals";
import {
  lineChartConversion,
  lineChartProduct,
  lineChartRevenue,
  lineChartUser,
} from "./data/lineChartData";
import ChartLine from "../../components/charts/line/ChartLine";
import { barChartRevenue, barChartVisit } from "./data/barChartData";
import ChartBar from "../../components/charts/bar/ChartBar";
import ChartPie from "../../components/charts/pie/ChartPie";
import { pieChartSource } from "./data/pieChartData";
import ChartArea from "../../components/charts/area/ChartArea";
import { areaChartRevenue } from "./data/areaChartData";

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
      <div className="box box4">
        <ChartPie {...pieChartSource} />
      </div>
      <div className="box box5">
        <ChartLine {...lineChartProduct} />
      </div>
      <div className="box box6">
        <ChartLine {...lineChartConversion} />
      </div>
      <div className="box box7">
        <ChartArea {...areaChartRevenue} />
      </div>
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
