import "./topdeals.scss";
import { topDealUsers } from "./topDealsData";

const TopDeals = () => {
  return (
    <div className="topdeals">
      <h1>Top Deals</h1>
      <div className="deals">
        {topDealUsers.map((user) => (
          <div className="deal" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="user-info">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
