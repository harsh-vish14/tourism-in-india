import NavLink from "./NavLink";
import Image from "next/image";
import Dropdown from "../dropdown/dropdown";
import Link from "next/link";
import classes from "./navbar.module.scss";

const Navbar = ({ session }) => {
  return (
    <div className={classes.navbar}>
      <div>
        <Link href="/">
          <a>
            <Image src="/logo/logo.jpg" alt="Logo" height={70} width={100} />
          </a>
        </Link>
      </div>
      <div className={classes.link}>
        {session ? (
          <>
            <NavLink href="/" text="Home" />
            <NavLink href="/states" text="States" />
          </>
        ) : (
          <div>
            <NavLink href="/auth/login" text="Login/SignIn" />
          </div>
        )}
      </div>
      {session && <Dropdown />}
    </div>
  );
};

export default Navbar;
