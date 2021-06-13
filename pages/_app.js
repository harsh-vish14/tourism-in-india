import { useSession, Provider } from "next-auth/client";
import { useEffect } from "react";
import Layout from "../components/layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
