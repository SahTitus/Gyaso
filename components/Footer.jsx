import { useState } from "react";
import {
  HomeOutlined,
  Search,
  HomeRounded,
  Star,
  StarOutline,
  Explore,
  ExploreOutlined,
  AutoAwesomeOutlined,
  AutoAwesome,
} from "@mui/icons-material";

import { useRouter } from "next/router";
import { NavLink } from "./Navlink";

const Footer = () => {
  const { pathname } = useRouter();

  const homeActive = pathname === "/";
  const searchActive = pathname === "/searchPage";
  const favActive = pathname === "/favorites";
  const exActive = pathname === "/explore";

  return (
    <div className={`btmNav `}>
      <div className="btmNav__container">
        <NavLink className={`btmNav__option`} href={"/"}>
          {!homeActive ? (
            <HomeOutlined className="navBtm__icon" />
          ) : (
            <HomeRounded className="navBtm__icon" />
          )}
        </NavLink>
        <NavLink className={`btmNav__option`} href={"/explore"}>
          {!exActive ? (
            <AutoAwesomeOutlined className="navBtm__icon" />
          ) : (
            <AutoAwesome className="navBtm__icon" />
          )}
        </NavLink>

        <NavLink className={`btmNav__option`} href={"/favorites"}>
          {favActive ? (
            <Star className="navBtm__icon" />
          ) : (
            <StarOutline className="navBtm__icon" />
          )}
        </NavLink>
        <NavLink className="btmNav__option" href={"/searchPage"}>
          <Search className="navBtm__icon" />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;