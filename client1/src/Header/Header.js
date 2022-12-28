import React from "react";
import "./Header.css";
import HeaderTop from "./HeaderTop/HeaderTop";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

function Header() {
  const [ShowSearchBar, setShowSearchBar] = useState(false);

  return (
    <section className="header">
      <HeaderTop
        ShowSearchBar={ShowSearchBar}
        setShowSearchBar={setShowSearchBar}
      />
      <HeaderBottom />
    </section>
  );
}

export default Header;
