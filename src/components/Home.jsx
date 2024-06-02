import React from "react";
import MainSidebar from "../layout/main-sidebar";
import '../assets/css/home.css';

const Home = () => {
  return (
    <div className="home">
        <div className="bar-container">
          <MainSidebar activate="home" />
        </div>
        <div className="home-container">
          <div className="home-board-container">
            <div className="board-container">
              <div className="wallet-title">
                Wallet Balance
                <div className="wallet-title-mark">$</div>
              </div>
              <div className="wallet-info">
                $ 8,453.00
              </div>
              <div className="wallet-small">
                <div className="small-income">
                  +$ 2431.00
                </div>
                <div className="small-out">
                  -$ 526.00
                </div>
              </div>
            </div>
            <div className="board-container">
              <div className="info-title">
                <div>User Infomation</div>
                <div className="info-title-mark"></div>
              </div>
              <div className="info-content">
                <div className="location-info">
                  <div className="info-subtitle">
                    Location  :</div>
                    <div className="info-subcontent">
                      India
                    
                  </div>
                </div>
                <div className="location-info">
                  <div className="info-subtitle">
                    Project   :  </div>
                    <div className="info-subcontent">
                      Project Name
                    
                  </div>
                </div>
                <div className="location-info">
                  <div className="info-subtitle">
                    Wallet ID   :  </div>
                    <div className="info-subcontent">
                      Wallet Address
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="board-container">
              <div className="secure-title">
                <div>User Infomation</div>
                <div className="secure-subtitle-icon">icon</div>
              </div>
              <div className="secure-content">
                <div className="secure-content-info">
                  <div className="secure-content-subtitle">2X A Enabled</div>
                  <div className="secure-subtitle-icon">switch</div>
                </div>
                <div className="secure-content-info">
                  <div className="secure-content-subtitle">Key</div>
                  <button className="secure-subtitle-icon secure-button">Change</button>
                </div>
              </div>
            </div>
          </div>
          <div className="home-tran-container">
            <div className="tran-title">Recent Transactions</div>
            <div>
              <table>
                <tr>
                  <th>Currency</th>
                  <th>Quantity</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>BNB</td>
                  <td>0.1</td>
                  <td>100$</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="home-tab-container">
            <div className="tab-container tab-payment">
              <div className="tab-title">Payment Service</div>
            </div>
            <div className="tab-container tab-utility">
              <div className="tab-title">Coin Connect Utility</div>
            </div>
            <div className="tab-container tab-card">
              <div className="tab-title">Coin Connect Card</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
