import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import PostState from "../context/Posts/postState";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <PostState>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PostState>
    </>
  );
}

export default MyApp;
