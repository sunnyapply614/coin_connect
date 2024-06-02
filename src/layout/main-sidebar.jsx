import React from "react";
import '../assets/css/mainsidebar.css';

export default function MainSidebar (acitvate){
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-title ">
                    <p>COIN</p>
                    <p>CONNECT</p>
                </div>
                <div className="bar-btn bar-home activate">
                    <p>Home</p>
                </div>
                <div className="bar-list">
                    <div className="bar-btn bar-wallet">
                        Wallet
                    </div>
                    <div className="bar-btn bar-deposit">
                        Deposit-Withdraw
                    </div>
                    <div className="bar-btn bar-service">
                        UtilityService
                    </div>
                    <div className="bar-btn bar-card">
                        Coin Connect card
                    </div>
                    <div className="bar-btn bar-api">
                        API
                    </div>
                    <div className="bar-btn bar-wallet">
                        Hardware Wallet
                    </div>
                </div>
                <br className="bar-divider"/>
                <div className="bar-list">
                    <div className="bar-btn bar-sub">
                        Sub-Accounts
                    </div>
                    <div className="bar-btn bar-chat">
                        Customer Chat
                    </div>
                </div>
            </div>
        </div>
    )
}