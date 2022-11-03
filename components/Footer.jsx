import {
  HomeOutlined,
  Search,
  HomeRounded,
  Star,
  StarOutline,
  AutoAwesomeOutlined,
  AutoAwesome,
} from "@mui/icons-material";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useStateContex } from "../store/StateProvider";
import AuthAlert from "./AuthAlert";
import { NavLink} from "./NavLink";

const Footer = () => {
  const { pathname } = useRouter();
  const [user, setUser]=useState(null)
  const { setSignInAlert } = useStateContex();

  const homeActive = pathname === "/";
  const favActive = pathname === "/favorites";
  const exActive = pathname === "/explore";

  const handleOnClick =()=>{
if (!user) setSignInAlert(true);
  }

  useEffect(()=>{
    const profile = JSON.parse(localStorage.getItem("userProfile"));
    setUser(profile?.result?._id);
  },[])

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

        <NavLink onClick={handleOnClick} className={`btmNav__option`} href={`${user ? "/favorites": ''}`}>
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

      <AuthAlert />
    </div>
  );
};

export default Footer;