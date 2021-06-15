import { useSession } from "next-auth/client";
import Head from "next/head";
import { Fragment } from "react";
import Navbar from "../navbar/navbar";
const Layout = (props) => {
  const [session, loading] = useSession();
  return (
    <Fragment>
      {!loading && <Navbar session={session} />}
      <div style={{ marginTop: "78px" }}>
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
