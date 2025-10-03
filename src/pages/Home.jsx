import "../styles/home.css";
import{ useEffect, useState } from "react";
import AchievementCard from "../components/cards/AchievementCard";
import FeaturedIn from "../components/corousel/FeaturedIn";
import Banner from "../components/banners/Banner";
import NavBar from "../components/banners/NavBar";

function Home() {

    return (
        <>
        <div id="home">
            <div id="nav-bar-container">
                <NavBar />
            </div>
            <div id="hero">
                <Banner />
            </div>
            <div className="achievements-section">
                <div className="title">
                    ACHIEVEMENTS
                </div>
                <div className="achievement-list">
                    <AchievementCard title="Revenue Generated" value="₹1 CR+" />
                    <AchievementCard title="Countries Worked" value="16" />
                    <AchievementCard title="Impressions Delivered" value="5BILLIONS+" />
                </div>
            </div>
            <div id="featured-in">
                <FeaturedIn />
            </div>
        </div>
        </>
    );
}

export default Home;