import "../styles/globals.scss";
import GlobalStyle from "../styles/globalStyle";
// import "../components/Content/Work.scss";
import "swiper/scss";
import "swiper/scss/pagination";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
