import { useState, useEffect, useRef } from "react";
import NavLink from "../navbar/NavLink";
import { FaCaretDown, FaSignOutAlt } from "react-icons/fa";
import { signOut, useSession } from "next-auth/client";
import Image from "next/image";
import classes from "./dropdown.module.scss";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [session, loading] = useSession();
  const dropdown = useRef(null);
  const logoutHandler = () => {
    signOut();
  };
  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showDropdown) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [showDropdown]);
  return (
    <div>
      <div
        onClick={() => setShowDropdown((b) => !b)}
        className={classes.button}
      >
        <div className={classes.imageLabel}>
          <Image
            src={session ? session.user.image : "/default.png"}
            alt="Logo"
            height={50}
            width={50}
            layout="fixed"
          />
        </div>

        <FaCaretDown className={classes.icon} />
      </div>
      {showDropdown && (
        <div ref={dropdown} className={classes.dropdown}>
          <div style={{ marginBottom: "9px" }}>
            <NavLink href={`/profile/${session.user.userID}`} text="Profile" />
          </div>
          <div className={classes.dropdownLinks}>
            <NavLink href="/" text="Home" />
            <NavLink href="/bookmarks" text="bookmarks" />
          </div>
          <div className={classes.logout} onClick={logoutHandler}>
            Logout <FaSignOutAlt style={{ marginLeft: "10px" }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
