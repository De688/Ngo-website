import React from "react";
import { useState } from "react";
import "./HeaderTop.css";
import { AiOutlineSearch } from "react-icons/ai";
import Hambuger from "hamburger-react";

function HeaderTop({ ShowSearchBar, setShowSearchBar }) {
  const showsearchBar = () => {
    console.log(ShowSearchBar);
    setShowSearchBar(!ShowSearchBar);
  };
  return (
    <section className="dropdown">
      <div className="main-topheader">
        <div className="logo">
          Www.<span className="span">mus</span>-AID
        </div>
        <div className="serchbar">
          <input
            placeholder="Enter search term"
            type="text"
            className="serach-input"
          />
          <AiOutlineSearch className="search-icon" />
        </div>
        <div className="mobileview">
          <div
            className={
              ShowSearchBar ? "main-search-icon1" : "main-search-icon2"
            }
            onClick={showsearchBar}
          >
            <AiOutlineSearch className="search-icon2" />
            <pdiv>Search</pdiv>
          </div>
          <div className="serchbar-with-text">
            <Hambuger color="grey" font-size="30px" />
            <div>Menu</div>
          </div>
        </div>
      </div>
      {ShowSearchBar ? (
        <div className="dropdown1">
          <div className="serchbar2">
            <input
              placeholder="Enter search term"
              type="text"
              className="serach-input"
            />
            <AiOutlineSearch className="search-icon" />
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default HeaderTop;
