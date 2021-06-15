import { Provider } from "next-auth/client";
import Layout from "../components/layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import Router from "next/router";
import NProgress from "nprogress";
import "../components/np.scss";
Router.onRouteChangeStart = (url) => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

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
