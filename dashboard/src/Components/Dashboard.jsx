
import React from "react";
import { Route, Routes } from "react-router-dom";
import "../data/index.css";

import Funds from "./Funds";
import Holdings from "./Holdings";
import Menu from "./Menu";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <GeneralContextProvider>
      <div className="dashboard-container">
        <aside className="watchlist-panel">
          <WatchList />
        </aside>

        <main className="main-panel">
          <Menu />

          <div className="content">
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
            </Routes>
          </div>
        </main>
      </div>
    </GeneralContextProvider>
  );
};

export default Dashboard;
