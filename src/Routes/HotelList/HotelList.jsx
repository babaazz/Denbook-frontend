import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./hotelList.css";

import { format } from "date-fns";
import { DateRange } from "react-date-range";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import SearchItem from "../../Components/search-item/SearchItem";

const HotelList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <>
      <Navbar />
      <Header type={"list"} />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="search-title">Search</h1>
            <div className="list-item">
              <label>Destination</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="list-item" onMouseLeave={() => setOpenDate(false)}>
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${
                date[0].startDate
                  ? format(date[0].startDate, "MM/dd/yyyy")
                  : "Check-in"
              } - ${
                date[0].startDate
                  ? format(date[0].endDate, "MM/dd/yyyy")
                  : "Check-out"
              }`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="list-date"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="list-item">
              <label>Options</label>
              <div className="ls-options">
                <div className="ls-option-item">
                  <span className="ls-option-text">Min price</span>
                  <input type="number" className="ls-option-input" />
                </div>
                <div className="ls-option-item">
                  <span className="ls-option-text">Max price</span>
                  <input type="number" className="ls-option-input" />
                </div>
                <div className="ls-option-item">
                  <span className="ls-option-text">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="ls-option-input"
                    value={options.adults}
                  />
                </div>
                <div className="ls-option-item">
                  <span className="ls-option-text">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="ls-option-input"
                    value={options.children}
                  />
                </div>
                <div className="ls-option-item">
                  <span className="ls-option-text">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="ls-option-input"
                    value={options.rooms}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list-result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelList;
