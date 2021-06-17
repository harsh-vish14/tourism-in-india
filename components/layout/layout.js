import { useSession } from "next-auth/client";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
const Layout = (props) => {
  const [session, loading] = useSession();
  return (
    <Fragment>
      <Head>
        <title>India Travel</title>
        <link rel="icon" type="image/png" href="/logo/logo.jpg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="This is travel wiki website where user can get information Tourist places in india"
        ></meta>
      </Head>
      {!loading && <Navbar session={session} />}
      <div style={{ marginTop: "78px" }}>
        <main>{props.children}</main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
