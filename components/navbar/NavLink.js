import { useRouter } from "next/router";
import Link from "next/link";
import classes from "./navlink.module.scss";

const NavLink = ({ href, text }) => {
  const router = useRouter();

  var currentStyle =
    router.pathname == href
      ? classes.active
      : router.pathname == href &&
        (href == "/auth/login" || href == "/auth/sigin")
      ? classes.active
      : null;

  const style = `${classes.navlinks} ${currentStyle}`;
  return (
    <Link href={href}>
      <a className={style}>{text}</a>
    </Link>
  );
};
export default NavLink;
