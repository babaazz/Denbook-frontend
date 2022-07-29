import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/featured/Featured";
import PropertyList from "../../Components/property-list/PropertyList";
import GuestsChoice from "../../Components/guests-choice/GuestsChoice";
import MailList from "../../Components/mail-list/MailList";
import Footer from "../../Components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Featured />
      <div className="home-container">
        <h2 className="home-title">Browse by property type:</h2>
        <PropertyList />
        <h2 className="home-title">Homes Guests Love:</h2>
        <GuestsChoice />
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Home;
