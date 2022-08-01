import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FaBed,
  FaPlane,
  FaCar,
  FaTaxi,
  FaMountain,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { IoBedOutline, IoPerson } from "react-icons/io5";

import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import "./header.css";

const Header = ({ type }) => {
  const [destination, setDestination] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);

  const [options, setOptions] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const navigate = useNavigate();

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "header-container list-mode" : "header-container"
        }
      >
        <div className="header-list">
          <div className="header-list-item active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="header-list-item">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="header-list-item">
            <FaCar />
            <span>Car Rentals</span>
          </div>
          <div className="header-list-item">
            <FaMountain />
            <span>Attractions</span>
          </div>
          <div className="header-list-item">
            <FaTaxi />
            <span>Taxi</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header-title">
              A lifetime of discounts? It's genius.
            </h1>
            <p className="header-desc">
              Get rewarded for your travels - unlock instant savings of 10% with
              free Denbook account.
            </p>
            <div className="header-search">
              <div className="header-search-item">
                <IoBedOutline className="search-bar-icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header-search-input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div
                className="header-search-item"
                onMouseEnter={() => setOpenDate(true)}
                onMouseLeave={() => setOpenDate(false)}
              >
                <FaRegCalendarAlt className="search-bar-icon" />
                <span
                  className="header-search-text"
                  onClick={() => setOpenDate(!openDate)}
                >{`${
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
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div
                className="header-search-item"
                onMouseEnter={() => setOpenOptions(true)}
                onMouseLeave={() => setOpenOptions(false)}
              >
                <IoPerson className="search-bar-icon" />
                <span
                  className="header-search-text"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adults} adults . ${options.children} children . ${options.rooms} rooms`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="options-item">
                      <span>Adults</span>
                      <div className="options-control">
                        <button
                          disabled={options.adults <= 1}
                          onClick={() => handleOptions("adults", "d")}
                        >
                          -
                        </button>
                        <span>{options.adults}</span>
                        <button onClick={() => handleOptions("adults", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options-item">
                      <span>Children</span>
                      <div className="options-control">
                        <button
                          disabled={options.children < 1}
                          onClick={() => handleOptions("children", "d")}
                        >
                          -
                        </button>
                        <span>{options.children}</span>
                        <button onClick={() => handleOptions("children", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options-item">
                      <span>Rooms</span>
                      <div className="options-control">
                        <button
                          disabled={options.rooms <= 1}
                          onClick={() => handleOptions("rooms", "d")}
                        >
                          -
                        </button>
                        <span>{options.rooms}</span>
                        <button onClick={() => handleOptions("rooms", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header-search-item">
                <button className="search-btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
